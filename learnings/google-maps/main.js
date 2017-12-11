var NS = NS || {};

(function(NS) {
    NS.initialize = function() {
        var mapOptions = {
            center: new google.maps.LatLng(28.711668, 77.265472),
            zoom: 10,
            
        };

        var mapTarget = document.getElementById('mapDiv');

        var map = new google.maps.Map(mapTarget, mapOptions);

    };

    return NS;

})(NS || {});
