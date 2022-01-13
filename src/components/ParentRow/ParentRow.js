import {useState, useEffect} from 'react'
import LetterBox from '../LetterBox/LetterBox.js'

const ParentRow = ({activeRow, guess, word, activeGuess, updateLetter}) => {


  const [displayGuess, setDisplayGuess] = useState(['','','','',''])
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setDisplayGuess(['','','','',''])
    setFlipped(false)
  }, [word])



  useEffect(() => {
    if (activeRow){
      let letterPieces = activeGuess.split('')
      while (letterPieces.length < 5){
        letterPieces.push('')
      }
      setDisplayGuess(letterPieces)
      console.log(displayGuess)
    }

  }, [activeGuess])

  useEffect(() => {
    if (guess==''){
      return
    }
    setFlipped(true)
    return ()=>setFlipped(false)
  })






  return (
    <div style={{display:'flex'}}>
      {displayGuess.map((status, i) => (
        <div key={i}>
          <LetterBox flipdelay={i*500} flipping={flipped} letter={status} updateLetter={updateLetter} boxColor={
              !word ? 'white'
              : word[i] == status ? '#6aaa64'
              : word.includes(status) ? '#c9b458'
              : '#86888a'
            }/>
        </div>
      ))}
    </div>
  )
}
export default ParentRow
