
var startup = function(url){
    $.getJSON(url + "/lights", function(data){
        var light_names = [null]
        for (i = 1; i != "a"; i++){
            try {
                light_names.push(data[i]["name"]);
            } catch(err){
                break
            }
        }
        console.log(light_names)
    });
};

var sendOnRequest = function(light, url){
    console.log("Turned " + light + " On");
    xhttp.open("PUT", url + "/lights/" + light + "/state", true);
    xhttp.send('{"on": true}');
}

var sendOffRequest = function(light, url){
    console.log("Turned " + light + " Off");
    xhttp.open("PUT", url + "/lights/" + light + "/state", true);
    xhttp.send('{"on": false}');
}

var sendResetRequest = function(light, url){
    console.log("Reset Colour for " + light)
    xhttp.open("PUT", url + "/lights/" + light + "/state", true);
    xhttp.send('{"bri":254, "ct":153}')
}