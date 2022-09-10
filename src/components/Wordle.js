import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup ,guesses, isCorrect, turn} = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    //DETACHES THE EVENT LISTENER
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses,turn,isCorrect);
  },[guesses,turn,isCorrect])

  return (
    <div>
      <h1>currentGuess is : {currentGuess}</h1>
      <h2> Solution is : {solution} </h2>
    </div>
  );
}
