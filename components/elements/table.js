import React from 'react'

export const Table = ({children}) =>{

    return(
    <table>
        
        {children}

        <style jsx>{`
            table{
                width: 100%;
                border-spacing: 0px 4px;
            }
            th {
                padding-bottom: 8px !important;
                padding-top: 8px !important;
                text-align: left !important;
                border-bottom: 1px solid rgb(235, 235, 235) !important;
            }
            td{
                margin-top:.5em
            }
            thead{
                background: var( --thead-color );
            }
        `}</style>
    </table>
    )
}

export const THead = ({children}) =>{

    return(
        <thead className="thead">
            {children}
            <style jsx>{`
                .thead{
                    background: var( --thead-color );
                    margin:0;
                    padding:0;
                    height: 2rem;
                }

            `}</style>
        </thead>
    )

}

export const TBody = ({children}) =>{

    return(
        <tbody className="tbody">
            {children}
            <style jsx>{`
                .tbody{
                    background: var( --tbody-color );
                    margin:0;
                    padding:0;
                    height: 3rem;
                }

            `}</style>
        </tbody>
    )
}

export const TD = ({colspan, children}) =>{

    return(
        <td colSpan={colspan} className="td">
            {children}
            <style jsx>{`
                .td{
                    height: 2rem;
                }

            `}</style>
        </td>
    )
}



