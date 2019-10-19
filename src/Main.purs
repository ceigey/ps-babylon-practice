module Main where

import Prelude

import Data.Tuple (Tuple(..))
import BabylonDemo (createScene, getCanvas, initEngine, initResize, logTupleTest, runRenderLoop)
import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = do
  canvas <- getCanvas "render-canvas"
  -- Set up engine
  engine <- initEngine canvas true
  -- Init resize
  engine' <- initResize engine
  -- Setup scene
  scene <- createScene canvas engine'
  -- Run scene
  engineAndScene <- runRenderLoop engine' scene
  _ <- logTupleTest (Tuple 12 12)
  _ <- logTupleTest engineAndScene
  log "Hello sailor!"
  
