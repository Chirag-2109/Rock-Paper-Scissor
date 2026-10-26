import { useState } from "react";
import Home from "./components/Home"
import { useRef } from "react";
import Final from "./components/Final";
const App=()=>{

  const [count, setCount] = useState(3);
  const ref = useRef(null);

  // function start() {
  //   if (ref.current !== null) return;

  //   setCount(3);

  //   ref.current = setInterval(() => {
  //     setCount((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(ref.current);
  //         ref.current = null;
  //         return 0;
  //       }

  //       return prev - 1;
  //     });
  //   }, 1000);
  // }
  return (

    // <h1>Hello</h1>
    // <Home />
    <Final />
    // <div>
    //   <h1>{count === 0 ? "GO!" : count}</h1>
    //   <button onClick={start}>Start</button>
    // </div>



  )
}

export default App