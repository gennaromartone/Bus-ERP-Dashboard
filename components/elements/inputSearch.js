import React, { useEffect } from 'react';

export default function InputSearch(){
    return(
    <div>
        <input type="search" placeholder="Search technicians, date, ..." className="search"/>

        <style jsx>
            {`
                div{
                    height:100%;
                    width: 100%;
                    position:relative;
                }
                .search{
                    font-size: .875rem;
                    font-weight: 400;
                    line-height: 1.5;
                    display: block;
                    width: 100%;
                    padding: .625rem .75rem;
                    transition: all .15s cubic-bezier(.68,-.55,.265,1.55);
                    color: #8898aa;
                    border: 1px solid #dee2e6;
                    border-radius: .25rem;
                    background-color: #fff;
                    background-clip: padding-box;
                    box-shadow: 0 3px 2px rgba(233,236,239,.05);
                    height: 100%;
                    transition: all .15s ease-in-out;
                }
            `}
        </style>
    </div>
    )
}