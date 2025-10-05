import { useContext } from "react"
import SmartHomeContext from "../SmartHomeContext"
import { Light } from "./Light"

export function SmartHome() {
  const { lights } = useContext(SmartHomeContext)

  return (
    <section
      style={{
        fontSize: "5rem",
        display: "grid",
        gridTemplateColumns: "min-content min-content",
        gap: "3px",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      {lights.map((_, i) => (
        <Light key={i} id={i} />
      ))}
    </section>
  )
}
