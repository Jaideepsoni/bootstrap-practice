import React, { useState } from 'react'



export default function Textform(props) {

    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleToUppercase = () => {
    setText(text.toUpperCase())
    }
    const handleToLowercase = () => {
    setText(text.toLowerCase())
    }
    const clickToCopy = () => {
        const copiedText = document.getElementById("exampleFormControlTextarea1");
        copiedText.select();
        document.execCommand('copy');
    }

    return (    
        <>
        <div className="mb-3 my-3 container " >
            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">{props.LikhoKuch}</label>

            <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>

            <button type="button" className="btn btn-info my-3 mx-2" onClick={handleToUppercase}>Convert to Upper Case</button>
            <button type="button" className="btn btn-info my-3 mx-2" onClick={handleToLowercase}>Convert to Lower Case</button>
            <button type="button" className="btn btn-info my-3 mx-2" onClick={clickToCopy}>Copy to Clipboard</button>
        <div className="container my-2" >
            <p> Your text summery</p>
            <p>Your text have {text.split(" ").length} words & {text.length} characters</p>
            <p className='my-3 fw-bold'>Preview of your text:</p>
            <p className='my-3'>{text}</p>
        </div>
        </div>
        </>
    )
}
