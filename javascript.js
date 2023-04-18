function vwmap(){
   var controlDensity = document.getElementById("contDensity").value;
   var interactionDensity = document.getElementById("interDensity").value;
    
   var mapOptions = new vw.MapOptions(
               vw.BasemapType.GRAPHIC,
               "",
               eval(controlDensity),
               eval(interactionDensity),
           false,
           new vw.CameraPosition(
              new vw.CoordZ(127.425, 38.196, 13487000),
              new vw.Direction(-90, 0, 0)
           ),
           new vw.CameraPosition(
              new vw.CoordZ(127.425, 38.196, 1548700),
              new vw.Direction(0, -90, 0)
          )
       );
        
       var map3d = new vw.Map( "vmap" , mapOptions );  
 }
