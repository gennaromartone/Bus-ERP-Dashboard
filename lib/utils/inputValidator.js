export function validateEmail(value = '') { 

    const regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //console.log(value, regex.test(String(value).toLowerCase()))
    return ( value && regex.test(String(value).toLowerCase()) )
    
}

export function validateTelephone(value = ''){
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return ( value && regex.test(String(value).toLowerCase()) ) 
}