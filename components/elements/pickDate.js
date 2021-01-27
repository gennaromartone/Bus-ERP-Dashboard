import flatpickr from 'flatpickr';
import "flatpickr/dist/themes/material_green.css";
const { useRef, useEffect } = require('react');

/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * @param {?String} pathname - Current path.
 * @param {Object} server - Server details.
 * @param {?Object} opts - Ackee options.
 */

 export default function PickDate(){

    const instanceRef = useRef()

    useEffect(() => {
        // Anything in here is fired on component mount.

        instanceRef.current = flatpickr('#flatpickr',
        {
            altInput: true,
            altFormat: "j F, Y",
            dateFormat: "Y-m-d",
        });
        instanceRef.current.setDate(new Date(), true);


        return () => {
            // Anything in here is fired on component unmount.
            instanceRef.current.destroy();
        }
    }, [])

    function handleDateBack(){
        let date = new Date(instanceRef.current.selectedDates[0]);
        date.setDate(date.getDate() - 1);
        instanceRef.current.setDate(date, true);
    }
    function handleDateForward(){
        let date = new Date(instanceRef.current.selectedDates[0]);
        date.setDate(date.getDate() + 1);
        instanceRef.current.setDate(date, true);
    }

    return <div className="container">
            <input id="flatpickr" placeholder="Calendar"  className="input-calendar" />
            <div onClick={handleDateBack}>Back</div>
            <div onClick={handleDateForward}>Forward</div>

            <style jsx>
                {`
                    .container{
                        display: flex;
                        align-items: center;
                    }
                    .container div{
                        margin-left:.5rem;
                    }
                `}
            </style>
        </div>
 }