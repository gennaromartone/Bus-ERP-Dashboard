import React, {useState, useRef, useEffect} from 'react'

const Input = ({type,label,name,placeHolder,validate,registerToForm}) => {

    const[ firstTouch, setFirstTouch ] = useState(true)
    const[ value, setValue ] = useState('')
    const[ error, setError ] = useState(false)

    const inputEl = useRef(null);

    // useEffect( ()=>{
    //     if( registerToForm){
    //         registerToForm(name,error); 
    //     }
        

    // }, []);
    useEffect( ()=>{
        if( registerToForm){
            registerToForm(name,error); 
        }
        

    }, [error]);

    const setValueInput = (e)=>{
        setValue(e.target.value);
        if( validate )
            setError( validate(e.target.value) )
    }

    const enter = (e)=>{
        setFirstTouch(false);
    }

    const leave = (e)=>{
        if( validate )
         setError( validate(value) )
    }

    

    return(
        <div className={!error && !firstTouch && validate? 'error':''} ref={inputEl}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} placeholder={placeHolder} onChange={setValueInput} onFocus={enter} onBlur={leave}></input>
            <style jsx>{`
                div{
                    position:relative;
                    height:var( --input-height);
                    background: var( --background-element );
                    border: var( --border-input);
                    border-radius: var( --border-radius );
                }
                label{
                    position: absolute;
                    left: var( --left-position-content);
                    right: 68.65%;
                    top: calc(50% - 16px/2 - 11px);
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 16px;
                    color: #697A81;
                }
                input{
                    position: absolute;
                    left: var( --left-position-content);
                    right: 47.34%;
                    top: calc(50% - 20px/2 + 9px);
                    height: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1F2F36;
                    width: calc( 100% - 1rem - 3.76%);
                    border: none;
                }
            `}</style>
        </div>
    )
}

export default Input;