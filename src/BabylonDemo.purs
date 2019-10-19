module BabylonDemo where
  
import Prelude

-- import Data.Maybe (Maybe) -- (Maybe(..))
import Effect (Effect)
import Data.Tuple (Tuple)
-- import Effect.Ref (Ref)
import Web.DOM (Element)
-- import Web.DOM.NonElementParentNode (getElementById)
-- import Web.Event.Event as EE

-- https://github.com/purescript/documentation/blob/master/language/Types.md
data BabylonEngine
data BabylonScene

foreign import getCanvas
  :: String
  -- -> Effect (Maybe Element)
  -> Effect Element

foreign import initEngine
  :: Element
  -> Boolean
  -> Effect BabylonEngine

-- We still need a "stopResize"!
foreign import initResize
  :: BabylonEngine
  -> Effect BabylonEngine

foreign import createScene
  :: Element
  -> BabylonEngine
  -> Effect BabylonScene

foreign import runRenderLoop
  :: BabylonEngine
  -> BabylonScene
  -> Effect (Tuple BabylonScene BabylonScene)

foreign import logTupleTest
  :: forall a b. Tuple a b
  -> Effect Unit
