

var ip_of_Hub = "192.168.0.25"
var api_key = "qlSEH3JH8d7nin2DSQ2aphmBu-mhsqBQ3yoyTvqg"
var url_path = "http://" + ip_of_Hub + "/api/" + api_key
xhttp = new XMLHttpRequest();
var light_names = [null]
var x = [];


$.getJSON(url_path + "/lights", function(data){
    console.log(data[5]["name"]);

    for (i = 1; i != "a"; i++){
        try {
            light_names.push(data[i]["name"]);
        } catch(err){
            break
        }
    }
    console.log(light_names)

    off.onclick = function(light){
        console.log("Turned Light Off");
        xhttp.open("PUT", url_path + "/lights/5/state", true);
        xhttp.send('{"on": false}');
    };

    on.onclick = function(light){
        console.log("Turned Light On");
        xhttp.open("PUT", url_path + "/lights/5/state", true);
        xhttp.send('{"on": true}');
    };

    reset.onclick = function(light){
        console.log("Turned on Colour Loop")
        xhttp.open("PUT", url_path + "/lights/5/state", true);
        xhttp.send('{"bri":254, "ct":153}')
    }


});
