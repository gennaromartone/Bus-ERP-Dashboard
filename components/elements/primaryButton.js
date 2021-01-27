import React, {useState,useEffect} from 'react'

const PrimaryButton = (props) =>{

    const[ disabled, setDisabled] = useState(false);

    useEffect( ()=>{
        console.log(props.disabled())
        setDisabled(props.disabled())
    },[props])

    return(
        <button className={props.disabled()?'disabled':''} onClick={props.actionButton} >
            
            
            { props.icon == 'add' && 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                </svg>
            }
            <span className={props.icon?'iconAdd':''}>{props.text}</span>
            <style jsx>{`
                button{
                    background: var( --button-background );
                    border-radius: 4px;
                    height: 48px;
                    padding: 1rem;
                    border:none;
                    align-items: center;
                    display: flex;
                    cursor:pointer;
                    text-decoration: none;
                }
                button:disabled,
                    button[disabled]{
                    border: none;
                    background-color: #cccccc;
                    color: #666666;
                }
                .disabled{
                    border: none;
                    background-color: #cccccc;
                    color: #666666;    
                }
                span{
                    font-weight: bold;
                    font-size: var( --button-font-size );
                    line-height: 24px;
                    color: var( --button-color );
                }
                span .iconAdd{
                    margin-left: 8px;
                }

                button:hover:enabled, button:hover:enabled, [type=submit]:hover:enabled, [type=reset]:hover:enabled, [type=button]:hover:enabled {
                    background: var( --button-background-hover );
                    text-decoration: none;
                  }
                  
                  .button:focus:enabled, .button:active:enabled, button:focus:enabled, button:active:enabled, [type=submit]:focus:enabled, [type=submit]:active, [type=reset]:focus, [type=reset]:active, [type=button]:focus:enabled, [type=button]:active:enabled {
                    background: var( --button-background-hover );
                    text-decoration: none;
                  }
                  
                  .button::-moz-focus-inner, a.button::-moz-focus-inner, button::-moz-focus-inner, [type=submit]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=button]::-moz-focus-inner {
                    border: 0;
                    padding: 0;
                  }
                  
                  .accent-button,
                  {
                    color: #ffffff;
                    background: var( --accent-button-background )
                  }
                  
                  .accent-button:hover, .accent-button:focus, .accent-button:active,
                  {
                    color: #ffffff;
                  } 
            `}</style>
        </button>
    )
}

export default PrimaryButton;