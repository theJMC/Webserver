
var ip_of_Hub = "192.168.0.25"
var api_key = "qlSEH3JH8d7nin2DSQ2aphmBu-mhsqBQ3yoyTvqg"
var url_path = "http://" + ip_of_Hub + "/api/" + api_key
xhttp = new XMLHttpRequest();
var light_names = [null]
var x = [];

$.getScript('/Hue-Control/api/api_interface.js', function() {
    startup(url_path)

    off.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendOffRequest(light_id, url_path)
    };

    on.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendOnRequest(light_id, url_path)
    };

    reset.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendResetRequest(light_id, url_path)
    };
})

    

