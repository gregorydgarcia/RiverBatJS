function handleFileSelect(e){var a=e.target.files,o=a[0],t=new FileReader;t.onload=function(e){return function(e){var a=e.target.result,o="layer"+counter,t=JSON.parse(a);fileLayers.layerId=t,counter+=1}}(o),t.readAsText(o,"UTF-8")}function handleFileSelect2(e){var a=e.target.files,o=a[0],t=new FileReader;t.onload=function(e){return function(e){var a=e.target.result,o="layer"+counter,t=JSON.parse(a);fileLayers2.layerId=t,counter+=1}}(o),t.readAsText(o,"UTF-8")}function onEachFeature(e,a){e.properties&&e.properties.name&&a.bindPopup(e.properties.name)}function aggregate(){var e=[{aggregation:"sum",inField:"population",outField:"pop_sum"},{aggregation:"average",inField:"population",outField:"pop_avg"},{aggregation:"median",inField:"population",outField:"pop_median"},{aggregation:"min",inField:"population",outField:"pop_min"},{aggregation:"max",inField:"population",outField:"pop_max"},{aggregation:"deviation",inField:"population",outField:"pop_deviation"},{aggregation:"variance",inField:"population",outField:"pop_variance"},{aggregation:"count",inField:"",outField:"point_count"}],a=fileLayers.layerId;points=fileLayers2.layerId,ref=$('input[name="aggregate-name"]').val(),aggregateResult=turf.aggregate(a,points,e),aggregateResult=turf.featurecollection(points.features.concat(aggregateResult.features)),aggregateGeo=L.geoJson(aggregateResult),toolLayers[ref]=JSON.stringify(aggregateResult),aggregateGeo.addTo(map),control.addOverlay(aggregateGeo,ref),appendToSave(ref)}function area(){var e="layer"+counter,a=fileLayers.layerId,o=turf.area(a);$("#area-result").append("<p>"+o+" Square Meters </p>"),$("#area").removeClass("hidden")}function bbox(){var e=$("#bbox-xLow").val(),a=$("#bbox-yLow").val(),o=$("#bbox-xHigh").val(),t=$("#bbox-yHigh").val(),n=[e,a,o,t];ref=$('input[name="bbox-name"]').val(),bboxResult=turf.bboxPolygon(n),bboxGeo=L.geoJson(bboxResult),toolLayers[ref]=JSON.stringify(bboxResult),bboxGeo.addTo(map),control.addOverlay(bboxGeo,ref),appendToSave(ref)}function center(){var e=$("#center-name").val();layerId="layer"+counter,cen=fileLayers.layerId,centerResult=turf.center(cen),centerGeo=L.geoJson(centerResult),toolLayers[e]=JSON.stringify(centerResult),centerGeo.addTo(map),control.addOverlay(centerGeo,e),appendToSave(e)}function centroid(){var e=$("#centroid-name").val(),a="layer"+counter,o=fileLayers.layerId,t=turf.centroid(o),n=L.geoJson(t);toolLayers[e]=cenSubmit,n.addTo(map),control.addOverlay(n,e),appendToSave(e)}function bezier(){var e=$("input[name='bezier-res']").val(),a=$("input[name='bezier-sharpness']").val(),o=$("input[name='bezier-name']").val(),t="layer"+counter,n=fileLayers.layerId,r=turf.bezier(n,e,a),l=L.geoJson(bezier);toolLayers[o]=JSON.stringify(r),l.addTo(map),control.addOverlay(l,o),appendToSave(o)}function buffer(){var e=$("#buffer-length").val(),a=$("input[name='buffer-unit']:checked").val(),o=$('input[name="buffer-name"]').val();layerId="layer"+counter,buf=fileLayers.layerId,bufferResult=turf.buffer(buf,e,a),bufferGeo=L.geoJson(bufferResult),toolLayers[o]=JSON.stringify(bufferResult),bufferGeo.addTo(map),control.addOverlay(bufferGeo,o),appendToSave(o)}function concave(){var e=$("#concave-maxEdge").val(),a=$("input[name='concave-unit']:checked").val(),o=$("#concave-name").val(),t="layer"+counter,n=fileLayers.layerId,r=turf.concave(n,length,a),l=L.geoJson(r);toolLayers[o]=JSON.stringify(r),l.addTo(map),control.addOverlay(l,o),appendToSave(o)}function load(){var e=$("#load-name").val(),a="layer"+counter,o=fileLayers.layerId,t=L.geoJson(o,{onEachFeature:onEachFeature});t.addTo(map),control.addOverlay(t,e)}function save(){var e=$("#save-list").val(),a=toolLayers[e],o="data:text/json;charset=utf8,"+encodeURIComponent(a);window.open(o,"_blank"),window.focus()}function appendToSave(e){$("#save-list").append('<option value="'+e+'">'+e+"</option>")}L.mapbox.accessToken="pk.eyJ1IjoiZ3JlZ29yeWRnYXJjaWEiLCJhIjoiNGRMNU13NCJ9.eYlvRKV4vrpXMGBPAs_Amw";var map=L.mapbox.map("map","gregorydgarcia.m187akkn");map.setView([51.513333,-.136667],16),L.control.fullscreen().addTo(map),L.Control.geocoder().addTo(map);var control=L.control.layers({Topology:L.mapbox.tileLayer("gregorydgarcia.m187akkn").addTo(map),Satellite:L.mapbox.tileLayer("gregorydgarcia.m189o9m3"),"Grey Scale":L.mapbox.tileLayer("gregorydgarcia.m18a0neh")},{}).addTo(map),counter=0,fileLayers={},fileLayers2={},toolLayers={},featureGroup=L.featureGroup().addTo(map),circle_options={color:"#fff",opacity:1,weight:10,fillColor:"#000",fillOpacity:.6},polyline_options={color:"#000"},drawControl=new L.Control.Draw({edit:{featureGroup:featureGroup}}).addTo(map);map.on("draw:created",function(e){var a=featureGroup.addLayer(e.layer);control.addOverlay(featureGroup,"Draw"),console.log(JSON.stringify(a))});var previousTool=null;$("input[type=button]").on("click",function(){null!=previousTool&&$(previousTool).addClass("hidden");var e=$(this).val(),a="#"+e;$(a).toggleClass("hidden"),previousTool=a});var previousToolSet=null,previousMenu=null;$(".tools ul li").on("click",function(){null!==previousToolSet&&$(previousToolSet).addClass("hidden"),null!==previousMenu&&$(previousMenu).removeClass("selected"),$(this).toggleClass("selected");var e=$(this).text(),a="div."+e;$(a).toggleClass("hidden"),previousToolSet=a,previousMenu=$(this)}),$(".title").on("click",function(){$(".tools").toggleClass("shrunk")}),$("#aggregate-submit").on("click",aggregate),document.getElementById("aggregate-data1").addEventListener("change",handleFileSelect,!1),document.getElementById("aggregate-data2").addEventListener("change",handleFileSelect2,!1),$("#area-submit").on("click",area),document.getElementById("area-data").addEventListener("change",handleFileSelect,!1),$("#bbox-submit").on("click",bbox),$("#center-submit").on("click",center),document.getElementById("center-data").addEventListener("change",handleFileSelect,!1),$("#centroid-submit").on("click",centroid),document.getElementById("centroid-data").addEventListener("change",handleFileSelect,!1),$("#bezier-submit").on("click",bezier),document.getElementById("bezier-data").addEventListener("change",handleFileSelect,!1),$("#buffer-submit").on("click",buffer),document.getElementById("buffer-data").addEventListener("change",handleFileSelect,!1),$("#concave-submit").on("click",concave),document.getElementById("concave-data").addEventListener("change",handleFileSelect,!1),$("#load-submit").on("click",load),document.getElementById("load-data").addEventListener("change",handleFileSelect,!1),$("#save-input").on("click",save);