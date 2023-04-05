/* eslint-disable no-unused-vars */
import React, { useState } from 'react'




export default function TextArea(props) {
    const handelUpperCaseClick = () => {
        let a =text.toUpperCase();
        
        setText(a);
    }
    const handelLowerCaseClick = () => {
        let b =text.toLowerCase();
        setText(b);
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const ClearText =()=>{
        setText("");
    }
    





    const [text, setText] = useState("");
    return (
        <>
            <div className="form-group container justify-content-between">
                <h1 className="text-start mt-5">{props.heading}</h1>
                <label htmlFor="MyBox" />
                <textarea className="form-control rounded-0" id="MyBox" rows="10" value={text} onChange={handelOnChange} style={{background: props.mode==="dark"?"gray":"white"}}></textarea>
                <button type="button" className="btn btn-primary mt-5 " onClick={handelUpperCaseClick}>convert to upper case</button>
                <button type="button" className="btn btn-success mt-5 mx-5" onClick={handelLowerCaseClick} >convert to Lower case</button>
                <button type="button" className="btn btn-success mt-5 mx-5" onClick={ClearText} >Clear</button>
            </div>
            <div className="container justify-content-between my-4">
                <h1 className="">your text summary</h1>
                <p>your text has {text.split(" ").length} words and {text.length} charecters</p>
                <p>you can finish this text in {((text.split(" ").length)*0.008)} minutes</p>
                <h2>preview here</h2>
                <p>{text.length>0?text:"Enter something in the text area to see it's preview here"}</p>
            </div>
        </>
    )
}
