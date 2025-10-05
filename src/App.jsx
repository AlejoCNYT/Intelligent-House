import { useReducer } from "react"
import SmartHomeContext from "./SmartHomeContext"
import { SmartHome } from "./components/SmartHome"
import { MainControls } from "./components/MainControls"
import { smartDevicesReducer } from "./reducers/smartDevicesReducer"

const initialState = { lights: [false, false, true] }

export function App() {
  const [state, dispatch] = useReducer(smartDevicesReducer, initialState)

  return (
    <SmartHomeContext.Provider value={{ lights: state.lights, dispatch }}>
      <div>
        <MainControls />
        <SmartHome />
      </div>
    </SmartHomeContext.Provider>
  )
}

export default App
