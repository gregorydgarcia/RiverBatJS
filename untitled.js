//Token must be declared at top
L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JlZ29yeWRnYXJjaWEiLCJhIjoiNGRMNU13NCJ9.eYlvRKV4vrpXMGBPAs_Amw';

//NAMESPACE
var BAT = BAT || {};


BAT.map = L.mapbox.map('map', 'gregorydgarcia.m187akkn');
BAT.modules = {};
BAT.init = {};
BAT.control = {};


BAT.handleFile = function(evt){
    
          var files = evt.target.files, // FileList object
                  f = files[0],
             reader = new FileReader();
      
      // Closure to capture the file information.
      reader.onload = (function (theFile) {
          return function (e) { 
              var JsonObj = e.target.result,
                  parsedJSON = JSON.parse(JsonObj);
              console.log(parsedJSON);
          };
      })(f);
      
      // Read in JSON as a data URL.
      reader.readAsText(f, 'UTF-8');
}

//INIT
(function() {
    BAT.map.setView([51.513333, -0.136667], 16);

    //GEOCODER
    L.Control.geocoder().addTo(BAT.map);
}());

