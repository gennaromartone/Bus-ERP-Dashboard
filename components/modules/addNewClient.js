import React from 'react';

import InputSearchLocation from './../elements/inputSearchLocation';
import SearchLocationInput from './../elements/searchLocationInput';

import Input from './../elements/input';
import PrimaryButton from './../elements/primaryButton'

import {validateEmail} from './../../lib/utils/inputValidator';
import {useFormValidation} from './../../lib/utils/useFormValidator';

// Client JSon
/* {
  "address": {
    "city": "string",
    "country": "string",
    "countryCode": "string",
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "postalCode": "string",
    "state": "string",
    "street": "string"
  },
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "name": "string",
  "serviceCompanyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}

*/

export const AddNewClient = () => {

    
    const {registerToForm, isValidForm } = useFormValidation();
    return(
        <main>
            <header>
                <div className="flex-row">
                    <div className="flex-large">
                        <h2>New Client</h2>
                    </div>
                </div> 
                <div className="flex-row">
                    <div className="flex-large">
                        <h3>Company Details</h3>
                    </div>
                </div> 
                
            </header>
            <main>
                <div className="flex-row">
                    <div className="flex-large">
                        <Input name="name" type="text" label="Company Name" placeHolder="Insert company name"/>
                    </div>
                </div> 
                <div className="flex-row">
                    <div className="flex-large">
                        <Input name="phone" type="number" label="Company Phone" placeHolder="Insert company phone"/>
                    </div>
                    <div className="flex-large">
                        <Input name="email" type="email" label="Company Email" placeHolder="Insert company email" validate={validateEmail} registerToForm={registerToForm}/>
                    </div>
                </div> 
                {/* <div className="flex-row">
                    <div className="flex-large">
                        <Input name="address" type="text" label="Company Address" placeHolder="Insert company address"/>
                    </div>
                </div>  */}
                
                {/* <div className="flex-row">
                    <div className="flex-large">
                        <SearchLocationInput name="address"  label="Company Address" placeHolder="Insert company address"/>
                    </div>
                </div> */}
                {/* <div className="flex-row">
                    <div className="flex-large">
                        <InputSearchLocation name="address"  label="Company Address" placeHolder="Insert company address"/>
                    </div>
                </div> */}
                <div className="flex-row">
                    <div className="flex-large">
                        <SearchLocationInput name="address"  label="Company Address" placeHolder="Insert company address"/>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-large justify-right-button">
                        <PrimaryButton actionButton={() => console.log(isValidForm())} disabled={isValidForm} text={`New Client`}/>
                    </div>
                </div> 
            </main>

            <style jsx>{`
                main{
                    display:block;
                    position:relative;
                }
            `}</style>
        </main>
    )
}

export default AddNewClient;