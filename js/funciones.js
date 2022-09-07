$(document).ready(function(){
  $("#clear").click(function(){
      $("#nombre").val('');
      $("#altura").val('');
      $("#peso").val('');
      $("#res").html("");
  });

  $("#calcular").click(function(){
      var nom = $("#nombre").val();
      var altc = parseInt($("#altura").val());
      var pes = parseInt($("#peso").val());
      var altm = altc / 100;
      var imc =  ( pes / (altm * altm)).toFixed(2);
      var clasificacion;
      
      if(pes>0  && altm>0){
          if (imc < 18.5) {
              clasificacion = 'Peso inferior al normal';
              //$("#datos").append("<tr><td>"+nom+"</td><td>"+altc+"</td><td>"+pes+"</td><td>"+imc+"</td><td>"+clasificacion+"</td></tr>");
              //alert(nom +' tu IMC es ' + imc + ' y se clasifica como ' + clasificacion );
             
          } else if (imc<24.9 && imc>=18.5) {
              clasificacion = 'Normal';
              //$("#datos").append("<tr><td>"+nom+"</td><td>"+altc+"</td><td>"+pes+"</td><td>"+imc+"</td><td>"+clasificacion+"</td></tr>");
              //alert(nom +' tu IMC es ' + imc + ' y se clasifica como ' + clasificacion );
              
          } else if (imc<29.9 && imc>=25) {
              clasificacion = 'Peso superior al normal';
              //$("#datos").append("<tr><td>"+nom+"</td><td>"+altc+"</td><td>"+pes+"</td><td>"+imc+"</td><td>"+clasificacion+"</td></tr>");
             // alert(nom +' tu IMC es ' + imc + ' y se clasifica como ' + clasificacion );
              
          } else if (imc>=30){
              clasificacion = 'Obesidad';
             // alert(nom +' tu IMC es ' + imc + ' y se clasifica como ' + clasificacion );
             //$("#datos").append("<tr><td>"+nom+"</td><td>"+altc+"</td><td>"+pes+"</td><td>"+imc+"</td><td>"+clasificacion+"</td></tr>");
          }
      }else{
          //alert(nom +' ingresa datos correctos!' );
          imc=0;
          clasificacion= 'Datos incorrectos';
      }
      $("#datos").append("<tr><td>"+nom+"</td><td>"+altc+"</td><td>"+pes+"</td><td>"+imc+"</td><td>"+clasificacion+"</td><td><button class='btn btn-primary mb-3 eliminar'>Eliminar</button></td><td>");
      
  });
  $("#borrar").click(function(){
      //$("#datos").html("");
      $(".table > tbody").empty();
  });
  $(document).on('click', '.eliminar', function(event) {
      event.preventDefault();
      $(this).closest('tr').remove();
  });
  $(document).on('click', '.editar', function(event) {
      event.preventDefault();
     $("#nombre") = $(this).closest('tr')[0];
     $("#peso") = $(this).closest('tr')[1];
     $("#altura") = $(this).closest('tr')[2];
      alert( $(this).closest('tr')[1]);
  });
});