//Validação para receber apenas números no campo CPF
const cpf = document.querySelector('#cpf');
cpf.addEventListener('keyup', (e) =>{
    if (isNaN(cpf.value[0]) === true) {
        cpf.disabled = true;
        alert("Digite apenas números");
    }
    //Máscara para o CPF
var cpflenght = cpf.value.length;
    if(cpflenght === 3 || cpflenght === 7){
       cpf.value += "."
       }else if(cpflenght === 11){
        cpf.value += "-"
    }
    
});




const confirmEmail = document.querySelector('#confirm-mail');
	confirmEmail.addEventListener('keyup', () =>{
		let email = document.getElementById('email');
		let  confirmEmailLength = confirmEmail.value.length;
		let confirmEmailvalue = confirmEmail.value;
        document.getElementById('btn-one-send').disabled = false;
		if(confirmEmailvalue !== email.value){
			document.getElementById('btn-one-send').disabled = true;
			document.getElementById('resp-error-form').innerHTML="Verifique campo email";
		}else if(confirmEmailvalue === email.value){
			document.getElementById('resp-error-form').style. display = "none"; 
		}
})