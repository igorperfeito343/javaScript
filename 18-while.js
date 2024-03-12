let contador = 0 

while (contador < 5) {
    contador++  
 console.log(contador)
}

var x = 20

while (x > 10) {
    console.log("entrei no laço while ...")
    x --
}
console.log("terminei")


let countdown = 5 

while (countdown > 0) {
console.log (countdown)
countdown--
}

var limite = 500
var fatura = 0  

while  (fatura <= limite){
     let gasto = Math.random() * 100
     fatura += gasto
     console.log(`gastei R$ ${gasto.toFixed(2)} --------------fatura : R$ ${fatura.toFixed(2)}`)
     fatura > limite && console.log(`estourou o limite do cartão`)
 }

var limite = 500
var fatura = 0
  
do {
    let gasto = Math.random() * 100
    fatura += gasto
    console.log(`gastei R$ ${gasto.toFixed(2)} --------------fatura : R$ ${fatura.toFixed(2)}`)
    fatura > limite && console.log(`estourou o limite do cartão`)
    
}while (fatura <= limite)



