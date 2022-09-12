import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup ,guesses, isCorrect,usedKeys, turn} = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);


    if(isCorrect){
      console.log("YOU WON!!!");
      window.removeEventListener("keyup", handleKeyup);
    }

    if(turn > 5){
      console.log("YOU LOST,SORRY!");
      window.removeEventListener("keyup",handleKeyup)
    }

    //DETACHES THE EVENT LISTENER
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup,isCorrect]);


  return (
    <div>
      {/*<h1>currentGuess is : {currentGuess}</h1>*/}
      <h2> Solution is : {solution} </h2>
      <Grid currentGuess={currentGuess} guesses = {guesses} turn = {turn}/>
      <Keypad usedKeys = {usedKeys}/>
    </div>
  );
}
