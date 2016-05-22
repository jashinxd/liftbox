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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var Latitude = undefined;
var Longitude = undefined;
var latlong = document.getElementById("latlong");
var addr = document.getElementById("address");
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
	latlong.innerHTML = "Latitude: " + Latitude + " Longitude: " + Longitude;
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
function ReverseGeocode(latitude, longitude){
    var reverseGeocoder = new google.maps.Geocoder();
    var currentPosition = new google.maps.LatLng(latitude, longitude);
    
    reverseGeocoder.geocode({'latLng': currentPosition}, function(results, status) {
	
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
		var index = results[0].formatted_address.search(re);
		addr.innerHTML = (results[0].formatted_address.substring(index, index + 5));
            }
            else {
                address.innerHTML('Unable to detect your address.');
            }
        } else {
            address.innerHTML('Unable to detect your address.');
        }
    });
}

watchMapPosition();
