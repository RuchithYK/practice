import './PasswordGenerator.css'
function PasswordGenerator() {
  return (
    <div className='pass-container'>
        <div className="pass-heading">Password Generator</div><br/>
        <input type='text' className="pass" value={"abc"}></input>
        <button className='pass-copy-btn'>Copy</button><br/><br/>
        <input type='range' className='pass-range' min='1' max='20' defaultValue='10'/><br/><br/>
        <input type='checkbox' className='pass-checkbox'/><label>Special Characters   </label>
        <input type='checkbox' className='pass-checkbox'/><label>Numbers</label>
    </div>
  )
}

export default PasswordGenerator