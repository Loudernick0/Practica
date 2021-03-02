// Nicolás Mongia, Division: 1 G.
/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/


function mostrar()
{   
    var respuesta;
    var tipoproductoIngresado;
    var preciobolsa;
    var cantidadBolsas;
    var multiplicadorbolsascal = 0;
    var multiplicadorbolsasarena = 0;
    var multiplicadorbolsascemento =0 ;
    var contadorbolsascal = 0;
    var contadorbolsasarena = 0;
    var contadorbolsascemento = 0;
    var acumuladorbolsascal = 0;
    var acumuladorbolsasarena = 0;
    var acumuladorbolsascemento = 0;
    var tipoconmascantidaddebolsas;
    var nombredetipoconmasbolsas;
    var importebruto;
    var contadorcantidadbolsastotal;
    var descuento = 0;
    var porcentajeadescontar;
    var importefinal;
    var tipomascaro;
    var precioporbolsadelmascaro;
    var flag = true;
    
  
    do
    {
      tipoproductoIngresado = prompt("ingrese un producto a comprar");
      while(tipoproductoIngresado != "cal" && tipoproductoIngresado != "arena" && tipoproductoIngresado != "cemento")
      {
        tipoproductoIngresado = prompt("ERROR!, el producto ingresado no es válido, por favor intente nuevamente");
      }
      preciobolsa = prompt("ingrese precio por bolsa del producto");
      preciobolsa = parseInt(preciobolsa);
      while(preciobolsa<=0)
      {
        preciobolsa = prompt("ERROR! ingrese precio nuevamente");
        preciobolsa = parseInt(preciobolsa);
      }
      cantidadBolsas = prompt("ingrese cantidad de unidades a adquirir");
      cantidadBolsas = parseInt(cantidadBolsas);
      while(cantidadBolsas<=0)
      {
        cantidadBolsas = prommpt("ERROR!, la cantidad no puede ser cero o menor, ingrese cantidad nuevamente");
        cantidadBolsas = parseInt(cantidadBolsas);
      }

      switch(tipoproductoIngresado)
      {
        case "cal":
          contadorbolsascal = contadorbolsascal + cantidadBolsas;
          multiplicadorbolsascal = cantidadBolsas * preciobolsa;
          acumuladorbolsascal = acumuladorbolsascal + multiplicadorbolsascal;
          preciobolsacal = preciobolsa;
          break;
        case "arena":
          contadorbolsasarena = contadorbolsasarena + cantidadBolsas;
          multiplicadorbolsasarena = cantidadBolsas * preciobolsa;
          acumuladorbolsasarena = acumuladorbolsasarena + multiplicadorbolsasarena;
          preciobolsaarena = preciobolsa;
          break;
        case "cemento":
          contadorbolsascemento = contadorbolsascemento + cantidadBolsas;
          multiplicadorbolsascemento = cantidadBolsas * preciobolsa;
          acumuladorbolsascemento = acumuladorbolsascemento + multiplicadorbolsascemento;
          preciobolsacemento = preciobolsa;
          break;	
      }
      if(contadorbolsascal>contadorbolsasarena && contadorbolsascal>contadorbolsascemento)
      { 
        nombredetipoconmasbolsas = "Cal";
        tipoconmascantidaddebolsas = contadorbolsascal;
      }
      else
      {
        if(contadorbolsasarena>contadorbolsascemento)
        { 
          nombredetipoconmasbolsas = "Arena";
          tipoconmascantidaddebolsas = contadorbolsasarena;
        }
        else
        { 
          nombredetipoconmasbolsas = "Cemento";
          tipoconmascantidaddebolsas = contadorbolsascemento
        }
      }
      if(flag == true)
      {
        tipomascaro = tipoproductoIngresado;
        precioporbolsadelmascaro = preciobolsa;
        flag = false;
      }
      else
      {
        if(preciobolsa>precioporbolsadelmascaro)
        {
          tipomascaro = tipoproductoIngresado;
          precioporbolsadelmascaro = preciobolsa;
        }
      }
    
      respuesta = confirm("desea realizar el pedido de otro producto?");
    }while(respuesta == true);

    contadorcantidadbolsastotal = contadorbolsascal + contadorbolsasarena + contadorbolsascemento;

    if(contadorcantidadbolsastotal>30)
    {
      descuento = 25;
    }
    else
    {
      if(contadorcantidadbolsastotal>10 && contadorcantidadbolsastotal<31)
      {
        descuento = 15;
      }
      else
      {
        descuento = 0;
      }
    }
    
    importebruto = acumuladorbolsasarena + acumuladorbolsascal + acumuladorbolsascemento;
    porcentajeadescontar = importebruto * descuento / 100;
    importefinal = importebruto - porcentajeadescontar;


  
    document.write("el importe total de la compra fue: "+importebruto+"<br>");
    document.write("el importe final con descuentos es: "+importefinal+"<br>");
    document.write("el tipo de producto con mas cantidad de bolsas es: "+nombredetipoconmasbolsas+" con: "+tipoconmascantidaddebolsas+" bolsas"+"<br>");
    document.write("el tipo mas caro es: "+tipomascaro+"<br>");
  
  
  
  }
  






