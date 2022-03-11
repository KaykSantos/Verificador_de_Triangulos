//função que é executada no carregamento da pagina
window.onload = function(){

   let medida1 = parseFloat(document.querySelector("#medida1"));
   let medida2 = parseFloat(document.querySelector("#medida2"));
   let medida3 = parseFloat(document.querySelector("#medida3"));

   const verificar = document.querySelector("#verificar");
   verificar.addEventListener("click", function(){
       
       if(medida1 > (medida2 + medida3) || medida2 > (medida1 + medida3) || medida3 > (medida2 + medida1)){
           document.querySelector("#result").value = "O triângulo é inválido";
       }
       if(medida1 == medida2 && medida2 == medida3){
           document.querySelector("#result").value = "O triângulo é equilátero";
       }
       if((medida1 == medida2 && medida2 != medida3) || (medida2 == medida3 && medida2 != medida1) || (medida3 == medida1 && medida3 != medida1)){
           document.querySelector("#result").value = "O triângulo é isósceles";
       }
   
   });
}