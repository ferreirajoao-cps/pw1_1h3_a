import userLogin from './moduloDados.js'

const login = document.getElementById("login")
const cadastro = document.getElementById("cadastro")

login.addEventListener("click", (e)=> {
    let user = document.getElementById("usuario").value 
    let senha = document.getElementById("senha").value
    let obj = {email: user, senha: senha}
    encontarUsuario(obj)
    
})
function encontarUsuario(value){
    var usuario = userLogin.find((obj) => obj.email === value.email)
    if(senha.value === "", value.email === ""){
        alert("Se F####! campos vazios")
    }
        else if  (usuario.senha === value.senha){
            window.location.href = "127.0.0.1:5000/homeUsuario.html"
        }
          
        else{
            alert("Se F####! Para o email: "+value.email)
        }
    

} 