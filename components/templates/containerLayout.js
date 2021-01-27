// import styles from './swimLane.module.css'
import React, { useEffect, useState } from 'react';
import SwimLane from './../modules/swimLane.js';
import HeaderMain from './../modules/headerMain.js';
import ModalDXLayout from './modalDXLayout.js';


export default function ContainerLayout({ title, buttonName, modalContent, children }){

    const [modalDx, setModalDx] = useState(false)

    useEffect( ()=>{
        console.log('modalDx',modalDx)
    }, [modalDx])

    return(
    <div className="service_order_component">

    
        <header className="header">
            <div className="flex_row flex_right">
                <div className="_100">
                    <HeaderMain title={title} buttonName={buttonName} actionButton={() => setModalDx(true)}/>
                </div>
            </div>
            
            
        </header>
        
        { modalDx && <ModalDXLayout close={() => setModalDx(false)}> {modalContent()} </ModalDXLayout>}

        <main className="wrapper">
            {children}
        </main>

        <style jsx>{`
        .container nav ul{
            display: flex;
            list-style: none;
            padding: 0 .5rem;
        }
        .header{
            display: flex;
            padding: 1rem 0;
            justify-content: left;
            flex-direction: column;
        }
        .flex_row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-bottom:1rem;
        }
        ._3{
            flex: 0 0 33%
        }
        ._100{
            flex: 0 0 100%
        }
        .flex_right{
            justify-content: flex-end;
        }
        .service_order_component{
            display: block;
            position: relative;
            height: 100%;
            width: 100%;
            overflow-y: hidden;
        }

        /* .head-row div:not(:first-child)::after{ */
     
        .wrapper{
            display: block;
            position: relative;
            height: 100%;
        }
        
      `}</style>
    </div>
    )
}