let nom = document.getElementById('nom')
let email = document.getElementById('email')
let message = document.getElementById('message')
let p_invalid = document.getElementById('p-invalid')
let p_valid = document.getElementById('p-valid')
let email_invalid = document.getElementById('email-invalid')
let email_valid = document.getElementById('email-valid')
let message_invalid = document.getElementById('message-invalid')
let message_valid = document.getElementById('message-valid')
let form = document.getElementById('form')

//validate nom
nom.addEventListener('focusout', function() {
    //verifier si le nom est vide

    if(nom.value === ""){
        if(p_invalid.style.display == 'none'){
            p_invalid.style.display = 'block'
            p_valid.style.display = 'none'
        }else{
            p_invalid.style.display = 'block'
        }
       if(nom.classList.contains('valid')){
        nom.classList.remove('valid')
        nom.classList.add('invalid')
       }else{
        nom.classList.add('invalid')
       }
    }else{
        if(nom.classList.contains('invalid')){
            nom.classList.remove('invalid')
            nom.classList.add('valid')
        }else{
            nom.classList.add('valid')
        }
        p_invalid.style.display = 'none'
        p_valid.style.display = 'block'
    }
})

//valide email
email.addEventListener('focusout', function() {
    //verifier si le nom est vide

    const regex_email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)

    
    if(email.value === "" || !regex_email){
        if(email_invalid.style.display == 'none'){
            p_invalid.style.display = 'block'
            email_valid.style.display = 'none'
        }else{
            email_invalid.style.display = 'block'
        }
       if(email.classList.contains('valid')){
        email.classList.remove('valid')
        email.classList.add('invalid')
       }else{
        email.classList.add('invalid')
       }
    }else{
        if(email.classList.contains('invalid')){
            email.classList.remove('invalid')
            email.classList.add('valid')
        }else{
            email.classList.add('valid')
        }
        email_invalid.style.display = 'none'
        email_valid.style.display = 'block'
    }
})
// validate the message
message.addEventListener('focusout', function() {
    //verifier si le nom est vide

    if(message.value === ""){
        if(message_invalid.style.display == 'none'){
            message_invalid.style.display = 'block'
            message_valid.style.display = 'none'
        }else{
            message_invalid.style.display = 'block'
        }
       if(message.classList.contains('valid')){
        message.classList.remove('valid')
        message.classList.add('invalid')
       }else{
        message.classList.add('invalid')
       }
    }else{
        if(message.classList.contains('invalid')){
            message.classList.remove('invalid')
            message.classList.add('valid')
        }else{
            message.classList.add('valid')
        }
        message_invalid.style.display = 'none'
        message_valid.style.display = 'block'
    }
})

//send form
form.addEventListener('submit', function(e){
    e.preventDefault()
    alert('Votre message a été envoyé')
})