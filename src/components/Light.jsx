import { useContext } from "react"
import SmartHomeContext from "../SmartHomeContext"

export function Light({ id }) {
  const { lights, dispatch } = useContext(SmartHomeContext)
  const isOn = Boolean(lights?.[id])
  const bgColor = isOn ? "#eee" : "#444"

  return (
    <button
      data-testid={`light-${id}`}
      id={String(id)}
      style={{
        border: "1px solid gray",
        padding: "2rem",
        fontSize: "3rem",
        background: bgColor,
      }}
      onClick={() => dispatch({ type: "toggle", payload: id })}
    >
      {isOn ? "💡" : "⚫️"}
    </button>
  )
}
