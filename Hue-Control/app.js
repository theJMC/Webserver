
var ip_of_Hub = document.getElementById("bridge_ip").value;
var api_key = document.getElementById("key").value;
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

    

