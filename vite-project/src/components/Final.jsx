
import { useState, useRef, useEffect } from "react";
import "./Home.css";

const Final = () => {
  const [curr, setCurrent] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [count, setCount] = useState(3);
  const [result, setResult] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef(null);

  const list = ["Stone", "Paper", "Scissor"];

  function handleChoice(choice) {
    if (isPlaying) return;

    setCurrent(choice);
    setResult("");
    setComputerChoice("");
  }

  function start() {
    if (isPlaying || curr === "") return;

    setIsPlaying(true);
    setCount(3);
    setResult("");

    // Choose the computer's move once for this round
    const randomIndex = Math.floor(Math.random() * 3);
    const computer = list[randomIndex];

    setComputerChoice(computer);

    let seconds = 3;

    ref.current = setInterval(() => {
      seconds -= 1;
      setCount(seconds);

      if (seconds === 0) {
        clearInterval(ref.current);
        ref.current = null;

        // Decide the winner
        if (curr === computer) {
          setResult("It's a Draw!");
        } else if (
          (curr === "Stone" && computer === "Scissor") ||
          (curr === "Paper" && computer === "Stone") ||
          (curr === "Scissor" && computer === "Paper")
        ) {
          setResult("You Win!");
        } else {
          setResult("Computer Wins!");
        }

        setIsPlaying(false);
      }
    }, 1000);
  }

  function reset() {
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
    }

    setCurrent("");
    setComputerChoice("");
    setCount(3);
    setResult("");
    setIsPlaying(false);
  }

  useEffect(() => {
    return () => {
      if (ref.current !== null) {
        clearInterval(ref.current);
      }
    };
  }, []);

  return (
    <div className="game">
      <h1>Stone Paper Scissors</h1>

      <h2>Choose your move</h2>

      <div className="choices">
        <button
          disabled={isPlaying}
          onClick={() => handleChoice("Stone")}
        >
          🪨 Stone
        </button>

        <button
          disabled={isPlaying}
          onClick={() => handleChoice("Paper")}
        >
          📄 Paper
        </button>

        <button
          disabled={isPlaying}
          onClick={() => handleChoice("Scissor")}
        >
          ✂️ Scissors
        </button>
      </div>

      <div className="battle">
        <div className="player">
          <h2>Human</h2>
          <h1>{curr || "Waiting..."}</h1>
        </div>

        <h2>VS</h2>

        <div className="player">
          <h2>Computer</h2>
          <h1>{computerChoice || "Waiting..."}</h1>
        </div>
      </div>

      <h1 className="count">
        {isPlaying ? count : result ? "Result" : "Ready?"}
      </h1>

      <h2>{result}</h2>

      <div className="actions">
        <button
          onClick={start}
          disabled={isPlaying || curr === ""}
        >
          Start
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Final;
