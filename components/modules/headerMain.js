import React from 'react';
import PrimaryButtonAdd from './../elements/primaryButtonAdd'

const HeaderMain = ({title, buttonName, actionButton}) =>{

    return(
    <div>
        <h2>{title}</h2>
        <PrimaryButtonAdd actionButton={actionButton} text={buttonName}/>
        <style jsx>{`
            div{
                display: flex;
                /* flex: 1; */
                width: 100%;
                /* flex-shrink: 1; */
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        `}</style>
    </div>
    )
}

export default HeaderMain;