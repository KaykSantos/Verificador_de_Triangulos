window.onload = function(){

    let medida1 = document.querySelector("#medida1");
    let medida2 = document.querySelector("#medida2");
    let medida3 = document.querySelector("#medida3");
    
    const verificar = document.querySelector("#verificar");
    verificar.addEventListener("click", function(){
        
        if(medida1.value == medida2.value && medida2.value == medida3.value){
                document.getElementById('result').value = 'O triângulo é equilátero';
                document.getElementById('imagemTri').src = "img/triEquilatero.png";
        }
        else if(medida1.value != medida2.value && medida2.value != medida3.value && medida3.value != medida1.value){
            document.getElementById('result').value = 'O triângulo é escaleno';
            document.getElementById('imagemTri').src = "img/triEscaleno.png";
        }
        else{
            document.getElementById('result').value = 'O triângulo é isósceles';
            document.getElementById('imagemTri').src = "img/triIsosceles.png";
        }

    });
 }
