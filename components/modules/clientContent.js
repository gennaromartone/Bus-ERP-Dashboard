import React from 'react'
import {Table,THead, TBody, TD} from './../elements/table.js';

const ClientContent = () =>{

    return(
        <div className="container">

            <Table>
                <THead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>CreatedOn</th>
                </tr>
                </THead>
                <TBody>
                
                <tr>
                    <TD colspan="100%">No Results</TD>
                </tr>
                        
                    
                </TBody>
            </Table>

            <style jsx>{`
                .container{
                    display:block;
                    position:relative;
                    width:100%;
                    height:100%;
                }
            `}</style>
        </div>
    )
}

export default ClientContent;