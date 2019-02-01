
function guardar(){
  var productos = document.getElementById("producto").value;
  var productazo = producto.options[productos-1].text;
                 
    var parrafo = document.createElement("p");  
    
  	parrafo.innerHTML="Elemento seleccionado: " + productazo;
	 
  document.getElementsByTagName("p")[0].appendChild(parrafo); 
  
}
