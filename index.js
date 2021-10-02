const botao = document.querySelector("#send");


   botao.addEventListener("click", function (event){
  event.preventDefault();
  const entrada = document.querySelector("#entrada");
  var palavra = entrada.value.toLowerCase();

   function ehPalindromo (palavra){
   if (palavra.length <= 1){
      //window.alert(`${palavra} é palíndromo`);
      var elementoEntrada = document.getElementById("valorEntrada");
      var resultado = (`${palavra} é palíndromo`);
       elementoEntrada.innerHTML = resultado;
      return;
    }
    for (var inicial = 0, final = palavra.length -1; inicial < final; inicial++, final--) {
      if (palavra.charAt(inicial) != palavra.charAt(final)){
        //window.alert(`${palavra} não é palíndromo`);
        var elementoEntrada = document.getElementById("valorEntrada");
        var resultado = (`${palavra} não é palíndromo!`);
        elementoEntrada.innerHTML = resultado;
        return;
      }
    }
    // window.alert(`${palavra} é palíndromo`);
    var elementoEntrada = document.getElementById("valorEntrada");
    var resultado = (`${palavra} é palíndromo`);
    elementoEntrada.innerHTML = resultado;
  }
  ehPalindromo(palavra);
  let temporizador = (setTimeout(()=> {
    document.location.reload(true)
    return temporizador;
  }, 5000))
 });

 