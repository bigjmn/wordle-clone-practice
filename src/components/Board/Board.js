import {useState, useEffect, useRef} from 'react'
import ParentRow from '../ParentRow/ParentRow.js'
import Keyboard from '../Keyboard/Keyboard.js'

import {wordlist} from '../wordlist.js'

const Board = ({word}) => {

  const inputBox = useRef(null)

  const [guessArray, setGuessArray] = useState(['','','','','','',])
  const [activeGuess, setActiveGuess] = useState('')

  const [guessno, setGuessno] = useState(0)

  const [letterStates, setLetterStates] = useState({})
  const [successlog, setSuccesslog] = useState(false)
  const [errlog, setErrlog] = useState('')



  const updateLetter = (letter, color) => {
    var obj = {}
    if (letterStates[letter] && letterStates[letter] == '#6aaa64'){
      return
    }
    obj[letter] = color
    setLetterStates(ls => Object.assign(ls, obj))
    setLetterStates(ls => Object.assign({}, ls))


  }
  const refocus = () => {
    inputBox.current.focus()
  }

  useEffect(() => {
    setGuessArray(['','','','','',''])
    setActiveGuess('')
    setGuessno(0)
    setLetterStates({})
    setErrlog('')
    setSuccesslog(false)
  }, [word])



  useEffect(() => {

    if (inputBox.current){
      inputBox.current.focus()


    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeGuess.length < 5){
      setErrlog('Too short!')
      setActiveGuess('')
      return
    }
    if (wordlist.includes(activeGuess) == false){
      setErrlog('Not in word list')
      setActiveGuess('')
      return
    }
    setGuessno(g => g+1)
    let newarr = guessArray.map((g, i) => i == guessno ? activeGuess : g)
    setGuessArray(newarr)
    if (activeGuess == word){
      setSuccesslog(true)
      setGuessno(7)
      return
    }


    if (guessno > 4){
      setErrlog(`You lost. The word was ${word}`)
      return
    }
    setErrlog('')
    setActiveGuess('')
  }
  const handleChange = (e) => {
    setActiveGuess(e.target.value)
  }

  return (
    <div onClick={refocus} style={{backgroundColor:'white'}}>

      {guessArray.map((guess, i) => (
        <div key={i} style={{marginBottom:'5px'}}>
          <ParentRow activeRow={i == guessno} guess={guessArray[i]} word={word} activeGuess={activeGuess} updateLetter={updateLetter}/>
        </div>
      ))}

      <div style={{position:'absolute',zIndex:'-1'}}>


      <form onSubmit={handleSubmit} style={{position:'absolute'}}>
        <input style={{position:'absolute'}} ref={inputBox} type='text' onChange={handleChange} maxLength='5' value={activeGuess}></input>
      </form>
      </div>
      <div style={{height:'30px'}}>
        {successlog && <h2 style={{color:'green'}}>SUCCESS!</h2>}
        <h3 style={{color:'red'}}>{errlog}</h3>
      </div>

      <Keyboard handleSub={handleSubmit} letterStates={letterStates} setActiveGuess={setActiveGuess} activeGuess={activeGuess}/>

    </div>
  )
}
export default Board
