L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JlZ29yeWRnYXJjaWEiLCJhIjoiNGRMNU13NCJ9.eYlvRKV4vrpXMGBPAs_Amw';

//global namespace
Bat = {
    map: L.mapbox.map('map', 'gregorydgarcia.m187akkn'),
    
    control: L.control.layers({
    'Topology': L.mapbox.tileLayer('gregorydgarcia.m187akkn').addTo(map),
    'Satellite': L.mapbox.tileLayer('gregorydgarcia.m189o9m3'),
    'Grey Scale': L.mapbox.tileLayer('gregorydgarcia.m18a0neh')}, {}),








    init: function (){
        //MAP INIT
        Bat.map.setView([51.513333, -0.136667], 16);
        
        //FULL SCREEN
        L.control.fullscreen().addTo(map);

        //GEOCOVER
        L.Control.geocoder().addTo(map);

        // CONTROL INIT
        }

}

Bat.init();
Bat.control.addTo(map);
