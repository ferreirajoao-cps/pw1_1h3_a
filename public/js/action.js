function calculaNumeros(){
 let n1 = parseInt (document.getElementById("usuario").value)
 let n2 =parseInt (document.getElementById("senha").value)
 let op =document.getElementById("operation").value
 let result
 if(op === "+"){
    result=(n1+n2)
    alert("Soma: "+n1+" "+op+" "+n2+ "=" +result)
 }
 else if(op === "-"){
    result=(n1-n2)
    alert("Subtração: "+n1+" "+op+" "+n2+ "=" +result)
 }
 else if(op === "*"){
    result=(n1*n2)
    alert("Multiplicação: "+n1+" "+op+" "+n2+ "=" +result)
}
else if(op === "/"){
    result=(n1/n2)
    alert("Divisão: "+n1+" "+op+" "+n2+ "=" +result)
}
else if ( op=== "sqrt"){
    result= Math.sqrt(n1+n2)
    alert("Raiz: "+result)
}
else { alert("Operação inválida") }

}
