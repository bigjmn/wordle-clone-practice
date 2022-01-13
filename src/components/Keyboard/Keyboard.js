import {useState, useEffect} from 'react'

const Keyboard = ({guessno, activeGuess, setActiveGuess, letterStates, handleSub}) => {

  const toprow = ['q','w','e','r','t','y','u','i','o','p']
  const midrow = ['a','s','d','f','g','h','j','k','l']
  const bottomrow = ['z','x','c','v','b','n','m']

  useEffect(() => {
  }, [letterStates])

  const handleDel = () => {
    if (activeGuess != ''){
      setActiveGuess(g => g.slice(0,-1))
    }
  }


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <div style={{display:'flex'}}>

      {toprow.map((b,i) => (
        <div key={i}>
          <KeyButton letter={b} activeGuess={activeGuess} setActiveGuess={setActiveGuess}
            color={letterStates[b] ? letterStates[b] : '#d8d8d8'}/>

        </div>
      ))}
      </div>

      <div style={{display:'flex'}}>


      {midrow.map((b,i) => (
        <div key={i}>
          <KeyButton letter={b} activeGuess={activeGuess} setActiveGuess={setActiveGuess}
            color={letterStates[b] ? letterStates[b] : '#d8d8d8'}/>

        </div>
      ))}
      </div>

      <div style={{display:'flex'}}>
        <button style={{backgroundColor:"#d8d8d8", display:'flex',alignItems:'center',justifyContent:'center', border:'none', height:'50px', margin:'3px'}} onClick={handleSub}><h4>ENTER</h4></button>


      {bottomrow.map((b,i) => (
        <div key={i}>
          <KeyButton letter={b} activeGuess={activeGuess} setActiveGuess={setActiveGuess}
            color={letterStates[b] ? letterStates[b] : '#d8d8d8'}/>

        </div>
      ))}
      <button style={{display:'flex',alignItems:'center',justifyContent:'center', border:'none',backgroundColor:"#d8d8d8", height:'50px', margin:'3px'}} onClick={handleDel}><h4><span class="iconify" data-icon="ion:backspace-outline"></span></h4>

      </button>

      </div>

    </div>
  )
}

const KeyButton = ({letter, activeGuess, setActiveGuess, color}) => {

  const handleClick = () => {
    if (activeGuess.length == 5){
      return
    }
    setActiveGuess(g => g+letter)

  }

  return(
    <button onClick={handleClick} style={{display:'flex',alignItems:'center',justifyContent:'center', border:'none', width:'30px',height:'50px',margin:'3px',backgroundColor:color,font:'24px Ariel'}}><h5 style={{color:color == "#d8d8d8" ? 'black' : 'white'}}>{letter}</h5></button>
  )
}
export default Keyboard
