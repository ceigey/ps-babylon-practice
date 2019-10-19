let BABYLON = require('babylonjs')

// https://doc.babylonjs.com

// Discoveries so far:
// - effects require one more function
//   in currying
//     https://pursuit.purescript.org/packages/purescript-ffi-utils/4.0.0
//     "Buffers in JS are mutable, so it should be an effectful function"
//   
// - Refs are only really useful for
//   immutable value types
//   (e.g. ref.value = X is what happens)
//   Example:
//     refEngine <- initEngine canvas true
//     engine <- read refEngine
//   ~=
//     let refEngine = { value: initEngine(canvas, true) }
//     let engine = refEngine.value
//     or 
//     let { value: engine } = refEngine
// - Return JS types from JS funcs using
//   callbacks which construct and return the right value
//    https://github.com/purescript/documentation/blob/master/guides/FFI-Tips.md#avoid-directly-calling-ps-code-from-foreign-modules

// getCanvas :: String -> Effect (Maybe Element)
exports.getCanvas = elementId => () => {
  canvas = document.getElementById(elementId)
  console.log(document, BABYLON)
  console.log('getCanvas', elementId, canvas)
  return canvas
}

// Not sure if this involves an effect or not...
// initEngine :: Element -> Boolean -> Effect (Ref BabylonEngine)
exports.initEngine = canvasOrContext => isUsingAntiAliasing => () => {
  console.log('initEngine', canvasOrContext, isUsingAntiAliasing)
  // There's also another condition I'm glossing over
  return new BABYLON.Engine(canvasOrContext, isUsingAntiAliasing)
}

// runRenderLoop :: BabylonEngine -> BabylonScene -> Effect Unit
exports.runRenderLoop = engine => scene => () => {
  console.log('runRenderLoop', scene)
  engine.runRenderLoop(() => {
    scene.render()
  })
  // Return via a function
  return [engine, scene]
}

exports.logTupleTest = tuple => () => {
  console.log('logTupleTest', tuple)
}

// Can be done with Web.Event.EventTarget.evenListener
// initResize :: BabylonEngine -> Effect Unit
exports.initResize = engine => () => {
  console.log('initResize', engine)
  window.addEventListener('resize', () => {
    engine.resize()  	
  })
  return engine
}


// createScene :: Element -> BabylonEngine -> Effect (Ref BabylonScene)
exports.createScene = canvas => engine => () => {
  console.log('createScene', canvas, engine)
  if (engine === null) {
    console.error('Engine should not be null!')
  } else if (engine === undefined) {
    console.error('Engine should not be undefined!')
  }

  let scene = new BABYLON.Scene(engine)

  // Should be provided as an argument 
  let camera = new BABYLON.FreeCamera(
  	'camera', 
  	new BABYLON.Vector3(0, 5, -10),
  	scene
  )

  // Clearly camera config should come
  // in the form of a thunk
  camera.setTarget(BABYLON.Vector3.Zero())

  // The canvas needs to be supplied separately
  camera.attachControl(canvas, false)

  // Light also needs to be a thunk
  let light = new BABYLON.HemisphericLight(
  	'light1',
    new BABYLON.Vector3(0, 1, 0),
    scene
  )

  // Yet another thunk... this looks good for piping!
  let sphere = BABYLON.MeshBuilder.CreateSphere(
  	'sphere',
  	{ segments: 16, diameter: 2 },
  	scene
  )

  // This is awkward for Purescript...
  // movePosition :: Number -> Number -> Sphere
  // movePosition x y sphere = ...
  sphere.position.y = 1

  let ground = BABYLON.MeshBuilder.CreateGround(
  	'ground1',
  	{ height: 6, width: 6, subdivisions: 2 },
  	scene
  )

  return scene
}

