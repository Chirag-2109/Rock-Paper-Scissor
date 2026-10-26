import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"


const Home = () => {
    let [curr, setcurrent] = useState("")

    let list = ['Stone', 'Paper', 'Scissor']

    let n = Math.floor(Math.random() * 3)
    // console.log(list[n])
    


    function handleStone() {
        setcurrent('Stone')
    }

    function handlePaper() {
        setcurrent('Paper')
    }

    function handleScissor() {
        setcurrent('Scissor')
    }

    const [count, setCount] = useState(3);
    const ref = useRef(null);

    function start() {
        if (ref.current !== null) return;

        setCount(3);

        ref.current = setInterval(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    clearInterval(ref.current);
                    ref.current = null;
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);
    }









    return (
        <div>

            <h1>Choose the Element</h1>
            <button onClick={handleStone}>Rock</button>
            <button onClick={handlePaper}>Paper</button>
            <button onClick={handleScissor}>Scissor</button>

            <h2>chosed element:{curr}</h2>
            <h3>-----------------------------------------------------------------------</h3>
            <h2>Lets see the result</h2>
            <button onClick={start}>Start</button>
            <h1>{count === 0 ? "GO!" : count}</h1>

            <h1>Computer predicted:{list[n]}</h1>
            

            <h1>Huma predicted:{curr}</h1>
            







        </div>


    )
}

export default Home