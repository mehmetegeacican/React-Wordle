import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup ,guesses, isCorrect,usedKeys, turn} = useWordle(solution);
  const [showModal,setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);


    if(isCorrect){
      setTimeout(() => {
        setShowModal(true)
      },2000)
      console.log("YOU WON!!!");
      window.removeEventListener("keyup", handleKeyup);
    }

    if(turn > 5){
      setTimeout(() => {
        setShowModal(true)
      },2000)
      console.log("YOU LOST,SORRY!");
      window.removeEventListener("keyup",handleKeyup)
    }

    //DETACHES THE EVENT LISTENER
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup,isCorrect]);


  return (
    <div>
      <Grid currentGuess={currentGuess} guesses = {guesses} turn = {turn}/>
      <Keypad usedKeys = {usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn = {turn} solution = {solution}/>}
    </div>
  );
}
