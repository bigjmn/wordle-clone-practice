import {useState, useEffect} from 'react'
import {wordlist} from '../wordlist.js'

import Board from '../Board/Board.js'

const GameContainer = () => {

  const [word, setWord] = useState(null)
  useEffect(() => {
    makerandom()
  }, [])

  const makerandom = () => {
    setWord(null)

    let newWord = wordlist[Math.floor(Math.random()*4000)]
    setWord(newWord)
  }




  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1>WORDLE</h1>
        <div style={{}}>
          <Board word={word}/>

        </div>

      <button onClick={makerandom}>NEW GAME</button>

    </div>
  )
}
export default GameContainer
