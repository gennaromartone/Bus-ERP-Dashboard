// import styles from './swimLane.module.css'
import React, { useEffect } from 'react';
import {useState} from 'react';

import PickDate from './../elements/pickDate';

export default function SwimLane(){

    
    const [_arrHours, setHours] = useState(['8 am','9 am','10 am','11 am','12 am','1 pm','2 pm','3 pm','4 pm','5 pm']);
    const [cols, setCols] = useState(11);
    const [colsTechnician, setColTechnician] = useState(cols-1)

    useEffect( () => {
        // Anything in here is fired on component mount.
        let sevenAndHalf = new Date();
        sevenAndHalf.setHours(19,30,0);
    
        setHours( () => addWorksHour(_arrHours, sevenAndHalf ));
        
     }, []);

     useEffect( () =>{
         console.log('secondo')
        setCols( () => _arrHours.length);
        setColTechnician( () => _arrHours.length - 1);
     }, [_arrHours])


    function addWorksHour(arrHours, newLastHour){
        // Example - lastHour = 7:30 pm
        let retArray = [];
        retArray = [...arrHours];
        
        const milisecsPerHour = 60 * 60 * 1000;
        let d = new Date();
        d.setHours(17, 0, 0)
        const lastHour = d.getTime();
        
        let hourToAdd = Math.round(( (newLastHour.getTime() - lastHour) / milisecsPerHour), 0);
        
        let modul = (newLastHour.getTime() - lastHour) % milisecsPerHour;
       
    
        
        if( modul > 0 )
            hourToAdd++;
    
        for( let i=0; i<hourToAdd; i++){
            retArray.push(`${i+6} pm`)
        }
    
        return retArray;
    
    }
    



    return(  
    <div className="task_service_board">

        <div className="tasks">
            <div className="container">
                <header className="flex_row h_tasks">
                    <h2>Tasks</h2>
                </header>
                <nav>
                    <ul>
                        <li className="_3">ONGOING</li>
                        <li className="_3">UPCOMING</li>
                        <li className="_3">COMPLETED</li>
                    </ul>
                </nav>
                {/* <!-- Loop over Tasks --> */}
                <div className="task">
                </div>
            </div>
        </div>

        <div className="flex_row">
            <PickDate/>
        </div>

        
        <div className="swim_lane_grid" >
        {/* <!--  Loop over Service Card Orders --> */}
            <div className="head_column">Technicians</div>
            <div className="swim_row head_row" >
                
                {_arrHours.map(hour => {
                    
                    return <div key={hour} style={{justifySelf: 'center'}}>{hour}</div>
                })}
                    
                
            </div>

            <div className="head_column">Gennaro Martone</div>
            <div className="swim_row technicians" >
                
                <div></div>
                {_arrHours.map(hour => {
                    return <div key={hour} className="cell"></div>
                })}
                {/* <TaskServiceBox from={f} to={t}/> */}
                
            </div>

            <div className="head_column">Perfido Giacomotti</div>
            <div className="swim_row technicians" >
                
                <div></div>
                {_arrHours.map(hour => {
                    return <div key={hour} className="cell"></div>
                })}
                {/* <TaskServiceBox from={f} to={t}/>
                <TaskServiceBox from={fr} to={to}/> */}
                
            </div>

        </div>
        <style jsx>{`
        .technicians{
            min-height: 10vh;
            grid-template-columns: 0.5fr repeat( ${colsTechnician}, 1fr) 0.5fr !important;
        }
        .h2{
            margin: 0;
            padding: .5rem;
        }
        
        .container nav ul{
            display: flex;
            list-style: none;
            padding: 0 .5rem;
        }
        
        .task_service_board{
            display:grid;
            grid-template-columns: 26% 74%;
            grid-template-rows: 3rem auto;
            height: 80%;
        }
        
        .task_service_board .tasks{
            grid-column: 1;
            grid-row: 1 / 3;
            border-radius: 5px;
            border: 1px solid white;
            margin-right: 1rem;
        }
        
        .tasks .container{
            height: 100%;
            background-color: white;
            padding: 0 .5rem;
        }
        
        .header{
            display: flex;
            padding: 1rem 0;
            justify-content: left;
            flex-direction: column;
        }
        
        .h_tasks{
            height: 2rem;
            padding: 0;
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
        .flex_right{
            justify-content: flex-end;
        }
        
        .calendar{
            cursor: pointer;
            width: fit-content;
            z-index: 2;
            margin-right: 2rem;
        }
        
        .input_calendar{
            border: none;
            border-color: transparent;
            cursor: pointer;
        }
        .swim_row{
            grid-column: span 10;
            justify-items: stretch;
            background-color: white;
            display: grid;
            grid-template-columns: repeat( ${cols}, 1fr);
            position:relative;
        
        }
        .head_row{
            height: 4vh;
            min-height: 5vh;
        }
        /* .head-row div:not(:first-child)::after{ */
        .head_row div::after{
            content: "";
            border-left: 1px dashed #ddd;
            height: 7px;
            position: absolute;
            bottom: 0;
            left: 50%;
        } 
        .head_column{
            /* border-right: 2px solid #ddd; */
            min-width: 9rem;
            background-color: white;
        }
        
        .technicians div{
            border-left: 1px dashed #ddd;
        }
        .cell{
            position:relative;
        }
        .technicians div:first-child{
            border-left: none;
        }
        .swim_lane_grid{
            display:grid;
            grid-template-columns: repeat( 11, 1fr);
            background-color: #eee;
            grid-gap: 2px;
            height: fit-content;
        }
        .swim_row div{
            background-color: white;
            display: flex;
            align-items: center;
            align-content: center;
            position: relative;;
        }
        .swim_head{
            grid-row: 1;
        }
      `}</style> 
    </div>
        
    )
}