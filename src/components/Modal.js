import React from 'react'

export default function Modal({isCorrect,turn,solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>YOU WIN !!!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} guesses :D</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Sorry, You lost</h1>
                <p className='solution'> Solution was : {solution}</p>
                <p>Better luck next time!</p>
            </div>
        )}
    </div>
  )
}
