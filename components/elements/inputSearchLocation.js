import React, {useState, useRef, useEffect} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const InputSearchLocation = ({type,label,name,placeHolder,validate,registerToForm}) => {

    const[ firstTouch, setFirstTouch ] = useState(true)
    const[ value, setValue ] = useState(null)
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
            <label htmlFor={name}>{label}{value}</label>
            {/* <input type={type} name={name} value={value} placeholder={placeHolder} onChange={setValueInput} onFocus={enter} onBlur={leave}></input> */}
            <GooglePlacesAutocomplete apiKey={`${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY}`} 
                selectProps={
                  {
                    value,
                    onChange: setValue,
                  },
                  {
                    styles: {
                      container: (provided) => ({
                        ...provided,
                        marginTop: '1rem',
                        padding: '1rem'
                      }),
                      control: (provided) => ({
                        ...provided,
                        border:'none'
                      }),
                      valueContainer: (provided) => ({
                        ...provided,
                        padding:'0'
                      }),
                      menu: (provided) => ({
                        ...provided,
                        width: 'calc( 100% - 1rem - 3.76%)',
                        top:'75%',
                      }),
                    },
                  }
                }
                
            
            />
            <style jsx>{`
                div{
                    position:relative;
                    height:var(  --input-height-location);
                    background: var( --background-element );
                    border: var( --border-input);
                    border-radius: var( --border-radius );
                }
                div div{
                    margin-top: 1rem !important;
                    padding: 1rem !important;
                }
                div div div{
                    border:none !important;
                }
                div div div{
                    padding:none !important;
                }
                label{
                    position: absolute;
                    left: var( --left-position-content);
                    right: 68.65%;
                    top: calc(35% - 16px/2 - 11px);
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

export default InputSearchLocation;