import { useState } from "react"

const useWordle = (solution) => {

    const [turn,setTurn] = useState(0);
    const [currentGuess,setCurrentGuess] = useState('');
    const [guesses,setGuesses] = useState([]) // each guess is an array
    const [history,setHistory] = useState([]) //each guess is a string
    const [isCorrect,setIsCorrect] = useState(false)



    /**
     * Format a Guess into an Array of Letter Objects
     * e.g [{key: 'a', color: 'yellow'}]
    */
    const formatGuess = () => {

    }

    /**
     * Add a new guess to the guesses state
     * update the isCorrect state if the guess is correct
     * add one to the turn state
     */
    const addNewGuess = () => {

    }

    /**
     * Handle Keyup events and track current guess
     * if user presses enter,adds a new guess
     */
    const handleKeyup = () => {

    }


    return {turn,currentGuess,guesses,isCorrect,handleKeyup}

}
export default useWordle