/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var crimestats = {"02142": 49.6, "10280": 47.3, "10282": 58.6, "10301": 56.1, "10302": 50.2, "10303": 61.2, "10304": 57.7, "10305": 35.8, "10306": 29.3, "10307": 28.5, "10308": 23.1, "10309": 26.0, "10310": 50.9, "10312": 22.2, "10314": 28.5, "11354": 37.4, "11355": 38.7, "11356": 42.0, "11357": 22.4, "11358": 28.8, "11359": 40.4, "11360": 24.5, "11361": 31.9, "11362": 18.6, "11363": 23.5, "11364": 23.9, "11365": 35.8, "11366": 22.0, "11367": 41.5, "11368": 62.7, "11369": 53.0, "11371": 45.0, "11372": 47.1, "11373": 47.1, "11374": 36.1, "11375": 33.4, "11377": 45.9, "11378": 38.9, "11379": 33.1, "11385": 54.4, "11411": 33.2, "11412": 50.3, "11413": 49.1, "11414": 27.0, "11415": 42.8, "11416": 54.0, "11417": 41.9, "11418": 50.2, "11419": 41.8, "11420": 41.3, "11421": 48.8, "11422": 49.8, "11423": 43.3, "11426": 25.6, "11427": 33.7, "11428": 31.7, "11429": 45.2, "11430": 27.2, "11432": 43.3, "11433": 71.1, "11434": 62.6, "11435": 52.0, "11436": 54.9, "11451": 35.7, "11040": 12.7, "10451": 90.8, "10452": 93.6, "10453": 97.8, "10454": 97.6, "10455": 94.0, "10456": 97.6, "10457": 97.6, "10458": 93.8, "10459": 97.4, "10460": 97.4, "10461": 57.8, "10462": 71.5, "10465": 48.8, "10466": 77.1, "10467": 86.7, "10468": 90.0, "10469": 63.3, "10470": 61.3, "10471": 41.4, "10472": 85.2, "10473": 79.4, "10474": 97.0, "10475": 55.0, "11001": 19.8, "11004": 20.6, "11005": 21.5, "10001": 53.9, "10002": 53.5, "10003": 45.3, "10004": 52.0, "10005": 55.7, "10006": 53.5, "10007": 46.5, "10009": 63.3, "10010": 46.6, "10011": 48.0, "10012": 47.5, "10013": 42.1, "10014": 48.4, "10016": 46.3, "10017": 41.6, "10018": 54.9, "10019": 53.1, "10020": 44.1, "10021": 39.0, "10022": 35.8, "10023": 43.1, "10024": 44.2, "10025": 52.2, "10026": 80.7, "10027": 78.0, "10028": 41.2, "10029": 82.8, "10030": 90.5, "10031": 76.0, "10032": 72.2, "10033": 65.8, "10034": 74.0, "10035": 89.5, "10036": 60.4, "10037": 89.0, "10038": 51.1, "10039": 91.9, "10040": 73.3, "10044": 61.0, "10065": 40.9, "10069": 53.1, "11096": 52.8, "10075": 40.1, "11101": 66.6, "11102": 55.1, "11103": 48.1, "11104": 47.1, "11105": 42.4, "11106": 53.7, "11109": 45.5, "10111": 35.8, "10115": 45.3, "10128": 45.9, "11691": 78.0, "11692": 87.7, "11694": 41.7, "11697": 22.4, "11201": 49.8, "11203": 62.2, "11204": 37.7, "11205": 66.8, "11206": 78.1, "11207": 88.3, "11208": 80.9, "11209": 42.1, "11210": 52.3, "11211": 53.1, "11212": 92.7, "11213": 79.7, "11214": 42.2, "11215": 44.6, "11216": 81.8, "11217": 57.6, "11218": 44.6, "11219": 39.1, "11220": 51.6, "11221": 85.1, "11222": 46.7, "11223": 41.7, "11224": 58.0, "11225": 72.0, "11226": 77.6, "11228": 34.4, "11229": 38.9, "11230": 39.8, "11231": 61.8, "11232": 61.5, "11233": 93.3, "11234": 40.4, "11235": 38.3, "11236": 63.1, "11237": 77.7, "11238": 62.9, "11239": 83.5}

var crimestatstime = {"1": 1.262307776, "2": 1.084303183, "3": 0.7172142342, "4": 0.4492500251, "5": 0.2990017833, "6": 0.2749204977, "7": 0.3872152099, "8": 0.5662305048, "9": 0.5979489981, "10": 0.7089055975, "11": 0.8316299976, "12": 0.9979047502, "13": 0.9158717915, "14": 1.056475656, "15": 1.196718895, "16": 1.204965846, "17": 1.255012214, "18": 1.335742648, "19": 1.376984519, "20": 1.487874687, "21": 1.506688933, "22": 1.494237841, "23": 1.391013351, "24": 1.326660563}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "XXXXXXXX"
            },
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
    }
};
var Latitude = undefined;
var Longitude = undefined;
var latlong = document.getElementById("latlong");
var addr = document.getElementById("addr");
var safety = document.getElementById("safety");

// Get geo coordinates
var re = /\d{5}/

function getMapLocation() {
    
    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}	

// Success callback for get geo coordinates

var onMapSuccess = function (position) {
    
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    latlong.innerHTML = "Latitude: " + Latitude + " Longitude: " + Longitude;
    
    //getMap(Latitude, Longitude);
    
}

// Get map by using coordinates

function getMap(latitude, longitude) {
    
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);
    
    
    var latLong = new google.maps.LatLng(latitude, longitude);
    
    var marker = new google.maps.Marker({
    	position: latLong
    });
    
    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {
    
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;
    
    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
	
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;
	latlong.innerHTML = "(" + Latitude + ", " + Longitude + ")";
	ReverseGeocode(Latitude, Longitude);
	
        //getMap(updatedLatitude, updatedLongitude);
    }
    //watchMapPosition();
}

// Error callback

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        	'message: ' + error.message + '\n');
}

// Watch your changing position

function watchMapPosition() {
    
    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });  
}


//Google Maps API

var now = new Date();
var hours = now.getHours();

var adjCrimeRate = 0;
if(hours == 0){
    hours = 24;
}

function ReverseGeocode(latitude, longitude){
    console.log('ok');
    var reverseGeocoder = new google.maps.Geocoder();
    var currentPosition = new google.maps.LatLng(latitude, longitude);
    console.log('ok2');
    reverseGeocoder.geocode({'latLng': currentPosition}, function(results, status) {
	
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
		var index = results[0].formatted_address.search(re)
		var zipcode = results[0].formatted_address.substring(index, index + 5);
		console.log(zipcode);
		addr.innerHTML = ("Zip Code: " + zipcode);
		setSafety(zipcode);

            }
            else {
                addr.innerHTML('Unable to detect your address.');
            }
        } else {
            addr.innerHTML('Unable to detect your address.');
        }
    });
}

var threatTier = -1;

var evaluateDanger = function(){
    if (adjCrimeRate > 100){
	threatTier = 3;
    }
    else if(adjCrimeRate > 50){
	threatTier = 2;
    }
    else {
	threatTier = 1;
    }
    console.log("Threat tier: " + threatTier);
}

var setSafety = function(zipcode){
    for (var key in crimestats) {
        console.log("/" + key + "/ == /" + zipcode + "/" );
        //if (crimestats.hasOwnProperty(key)) {               
        if (key.toString() == zipcode.toString()) {
            console.log('key: ' + key);
            adjCrimeRate = crimestats[key]*crimestatstime[hours];
	    evaluateDanger();
            safety.innerHTML = adjCrimeRate;
	}
        //}                                                   
    }
}

watchMapPosition();
