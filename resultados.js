/*
1) Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:
a) Se x for menor que y, mostrar a mensagem: Olá mundo!
b) Se x for maior que y, mostrar: Mundo, olá!
c) Se x for igual a y, mostrar: Adeus!
*/
var x=5
var y=7
function maiorMenor(){
 if (x<y) {
   return "olá mundo"
 } 
  else if (x>y) {
  return "Mundo, olá!"
 } 
  else (x===y) 
   return "Adeus!" }
   console.log (maiorMenor(x>y))
/*2) Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:
a) Se fruta for igual a banana, mostrar: O filme é Os minions.
b) Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
c) Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
d) Se não for nenhum dos valores acima, mostrar: O cinema tá fechado.
*/

function filmes(){
    let fruta = "laranja";

    switch(fruta){
        case "banana":
            console.log("O filme é Os minions.")
        break;
        case "laranja":
            console.log("O filme é Laranja Mecânica.")
        break;
        case "maçã":
            console.log("O filme é Branca de Neve.")
        break;
        default:
            console.log("O cinema tá fechado.")
    }
}
  console.log (filmes ("laranja"))