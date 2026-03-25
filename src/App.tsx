import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Frontend Engineering Lab</h1>
        <p>A hands-on sandbox to explore how frontend systems work under the hood, experiment with advanced patterns, and build production-grade concepts in isolation.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>Count: {count}</p>
      </section>
    </>
  )
}

export default App
