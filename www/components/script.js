window.onload = function(){

   const medida1 = document.querySelector("#medida1");
   const medida2 = document.querySelector("#medida2");
   const medida3 = document.querySelector("#medida3");

   const verificar = document.querySelector("#verificar");
   verificar.addEventListener("click", function(){
       
       if((medida1 < medida2 + medida3) && (medida2 < medida1 + medida3) && (medida3 < medida1 + medida2)){
           if((medida1 == medida2) && (medida2 == medida3)){
               document.getElementById('result').value = "O triângulo é equilátero";
           }
           else if((medida1 == medida2 && medida2 != medida3) || (medida2 == medida3 && medida3 != medida1) || (medida3 == medida1 && medida1 != medida2)){
               document.getElementById('result').value = "O triângulo é isósceles";
           }
           else{
               document.getElementById('result').value = "O triângulo é escaleno";
           }
       }else{
           document.getElementById('result').value = "O triângulo não existe";
       }
   
   });
}