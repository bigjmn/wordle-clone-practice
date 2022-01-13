import {useState, useEffect} from 'react'
import './LetterBox.css'

const LetterBox = ({flipdelay, flipping, letter, boxColor, updateLetter}) => {

  const [flipped, setFlipped] = useState(false)


  useEffect(() => {
    if (flipping){
      setTimeout(() => {
        setFlipped(true)
        updateLetter(letter,boxColor)
      }, flipdelay)
    }
    return () => setFlipped(false)
  }, [flipping])

  return (
    <div>

    <div className='letterbox'>
    <div className={flipped ? "flipped" : ""}>

    <div className='boxside' style={{height:'65px',width:'65px', marginLeft:'5px', backgroundColor: 'white',border: '2px solid #d8d8d8',display:'flex',alignItems:'center', justifyContent:'center'}} >
    <h1>{letter.toUpperCase()}</h1>


    </div>
    <div className='otherside' style={{height:'65px',width:'65px', marginLeft:'5px', backgroundColor: flipped ? boxColor : 'white',border: 'none',display:'flex',alignItems:'center', justifyContent:'center'}} >
    <h1 style={{color:'white'}}>{letter.toUpperCase()}</h1>


    </div>
    </div>
  </div>
  </div>
  )
}
export default LetterBox
