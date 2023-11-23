import userLogin from './moduloDados.js'

const login = document.getElementById("login")
const cadastro = document.getElementById("cadastro")

login.addEventListener("click", (e)=> {
    let user = document.getElementById("usuario").value 
    let senha = document.getElementById("senha").value
    console.table(userLogin[0])
})
cadastro.addEventListener("click", (e) => {
    var usuario =userLogin.find((userLogin) => userLogin.email === "ferreirajoaogabriel14@gmail.com")
    console.log(usuario)
})
function encontarUsuario(value, index, array){
    console.table(value.email)
}