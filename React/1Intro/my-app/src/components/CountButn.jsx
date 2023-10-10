import { useEffect, useState } from "react"

const CountButn = () => {
  const [isRunning, setIsRunning] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isRunning) {
      return
    }
    let timerId = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [isRunning])

  return (
    <div className="count-border">
      <div>{count}</div>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default CountButn
