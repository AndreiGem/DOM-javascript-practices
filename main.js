"use strict";

/*<form action="" class="formulario">
    Descripción: <input type="text" class="descripcion" placeholder="artículo"> <br>
    Cantidad: <input type="number" class="cantidad" placeholder="$"> <br>
    Fecha: <input type="date" class="fecha"> <br>
    Forma de pago: <br>
    TDC: <input type="radio" name="formaPago" value="TDC"> <br>
    Efectivo: <input type="radio" name="formaPago" value="Efectivo"> <br>
    <button type="button" class="enviar" onclick="insertar()">Enviar</button>
    <button type="button" class="limpiar">Limpiar</button>
  </form>*/

function insertar() {
  let descripcion = document.querySelector('.descripcion').value;
  let cantidad = document.querySelector('.cantidad').value;
  let fecha = document.querySelector('.fecha').value;
  let radios = document.getElementsByName('formaPago');
  let valorRadio = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valorRadio = radios[i].value;
    }
  }
  console.log("Descripcion: " + descripcion + "\nCantidad: " + cantidad + "\nFecha: " + fecha + "\nForma de Pago: " + valorRadio); 
}