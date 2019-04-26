
// Variable Definitions 
var ip_of_Hub = "192.168.0.25"
var api_key = "qlSEH3JH8d7nin2DSQ2aphmBu-mhsqBQ3yoyTvqg"
var url_path = "http://" + ip_of_Hub + "/api/" + api_key
xhttp = new XMLHttpRequest();
var light_names = [null]
var x = [];

// api_interface.js is located at ./api/api_interface.js

// Created a connection to the API
$.getScript('/Hue-Control/api/api_interface.js', function() {
    // Tells the api_interface.js to start itself
    startup(url_path)
    
    // Links the off button on the website to the function in the api_interface.js
    off.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendOffRequest(light_id, url_path)
    };

    // Links the on button on the website to the function in the api_interface.js
    on.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendOnRequest(light_id, url_path)
    };
    
    // Links the reset button on the website to the function in the api_interface.js
    reset.onclick = function(){
        var light_id = document.getElementById("id_selection").value;
        sendResetRequest(light_id, url_path)
    };
})

    

