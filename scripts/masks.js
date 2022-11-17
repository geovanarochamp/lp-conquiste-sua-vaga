$(document).ready(function() {        
    $('#cc-number').mask("0000 0000 0000 0000")
           
    const options = {
        'translation': {
            A : {
                pattern: /^[A-Za-z\s]*$/
            }
        }
    }
    $('#cc-name').mask("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", options)
        
    $('#cc-expiration').mask("00/00", {placeholder: 'MM/AA'})
   
    $('#cc-cvc').mask("0000")
})
