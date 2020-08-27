var map; 

function createMap() {
    var a = 14.274179,
        b = 120.987902,
        diff = 0.0001;
        
    var options = {
        center: { lat: a, lng: b},
        zoom:18,

    };
    var polygonCoordinates = [
        { lat: a - diff, lng: b - diff },
        { lat: a + diff, lng: b - diff },
        { lat: a + diff, lng: b + diff },
        { lat: a - diff, lng: b + diff },
      ];
    map = new google.maps.Map(document.getElementById('map'), options);


    var polygon = new google.maps.Polygon({
        map: map,
        paths: polygonCoordinates,
        strokeColor: 'green',
        fillColor: 'green',
        fillOpacity: 0.4,
        draggable: true,
        editable: true
    });


};