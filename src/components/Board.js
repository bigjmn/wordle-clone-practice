import {useState, useEffect} from 'react'
import ParentRow from './ParentRow'
const Board = ({newword}) => {

  const [word, setWord] = useState(null)

  useEffect(() => {

    setWord(newword)
    setGuessnum(0)
    setErrlog('')
    setSuccesslog(false)
  }, [newword])



  const [guessnum, setGuessnum] = useState(0)
  const [errlog, setErrlog] = useState('')
  const [successlog, setSuccesslog] = useState(false)

  const errlogger = (checkerr) => {
    setErrlog(checkerr)
  }

  const resolveGuess = (guess) => {
    if (guess == word){
      setSuccesslog(true)
      setGuessnum(7)
      return
    }
    setGuessnum(guessnum => guessnum +1)
    if (guessnum >= 5){
      setErrlog('You lost. The Word was '+word)
    }
  }
  const arrkeys = [...Array(6).keys()]


  return word ? (
    <div>
      <div style={{height:'30px'}}>
        {successlog && <h2 style={{color:'green'}}>SUCCESS!</h2>}
        <h3 style={{color:'red'}}>{errlog}</h3>
      </div>
      {arrkeys.map(k => (
        <ParentRow word={word} errlogger={errlogger} activeGuess={(k==guessnum)} resolveGuess={resolveGuess}/>
      ))}


    </div>
  )
  : null
}
export default Board
