//função que é executada no carregamento da pagina
window.onload = function(){
   const medida1 = document.querySelector("#medida1");
   const medida2 = document.querySelector("#medida2");
   const medida3 = document.querySelector("#medida3");

   const verificar = document.querySelector("#verificar");
   verificar.addEventListener("click", function(){
       
       if(medida1 < (medida2 + medida3) && medida2 < (medida1+medida3) && medida3 < (medida1 + medida2)){
           if(medida1 == medida2 && medida2 == medida3){
               document.querySelector("#result").value = "O triângulo é equilátero";              
           }
           if(medida1 == medida2 || medida2 == medida3 || medida3 == medida1){
               document.querySelector("#result").value = "O triângulo é isósceles";
           }
           if(medida1 != medida2 && medida2 != medida3 && medida3 != medida1){
               document.querySelector("#result").value = "O triângulo é escaleno";
           }
       }else{
           document.querySelector("#result").value = "O triângulo é inválido";
       }
   });
}