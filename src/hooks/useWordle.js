import { useState } from "react"

const useWordle = (solution) => {

    const [turn,setTurn] = useState(0);
    const [currentGuess,setCurrentGuess] = useState('');
    const [guesses,setGuesses] = useState([]) // each guess is an array
    const [history,setHistory] = useState(["hello","ninja"]) //each guess is a string
    const [isCorrect,setIsCorrect] = useState(false)



    /**
     * Format a Guess into an Array of Letter Objects
     * e.g [{key: 'a', color: 'yellow'}]
    */
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key:letter,color: 'grey'}
        })
        //find any green letters
        formattedGuess.forEach((letter,index) => {
            if(solutionArray[index] === letter.key){
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })
        //find any yellow letters
        formattedGuess.forEach((letter,index) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green'){
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
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
    const handleKeyup = ({key}) => {
        //Enter submit
        if(key === 'Enter'){
            //only add guess if turn is less than 5
            if(turn > 5){
                console.log("You used all your guesses");
                return
            }
            //do not allow duplicate words
            if(history.includes(currentGuess)){
                console.log("You already tried that word");
                return
            }
            //word must be 5 chars long
            if(currentGuess.length !== 5){
                console.log("Word must be 5 characters long");
                return
            }
            const formatted = formatGuess()
            console.log(formatted);
        }
        //Backspace deletiion
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                //removes the last char
                return prev.slice(0,-1)
            })
            return
        }
        //ANY SINGLE LETTER VALUE
        if(/^[a-zA-Z]$/.test(key)){
            //currenGuess < 5
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }


    return {turn,currentGuess,guesses,isCorrect,handleKeyup}

}
export default useWordle