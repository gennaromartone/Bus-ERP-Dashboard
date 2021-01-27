
export function useFormValidation(){

    let inputToObserve = {};
    let isValid = false;

    function isValidCheck() {
      console.log('isValid',inputToObserve)
        const hasErrors = Object.keys(inputToObserve).some(name =>
          {console.log(name,inputToObserve)
            return inputToObserve[name];
          }
        );
          console.log('hasErrors',hasErrors)
          isValid = hasErrors;
        return hasErrors;
    }
    function registerToForm(id,hasError){
      inputToObserve = Object.assign({ ...inputToObserve, [id]:hasError}) ;
      console.log('registerToForm',inputToObserve)
      isValidCheck();
    }
    
    function isValidForm(){
      return isValid;
    }

    return {
      isValidForm,
            registerToForm
    };
} 


