console.log('mapbox.js has loaded')
function renderMap(){
L.mapbox.accessToken = 'pk.eyJ1IjoiY2lpeWFuIiwiYSI6Iks0djZqb0kifQ.KDk4q7pEJOORGrH-54g0jQ';
			var geojson = 
			{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "Boulcott School, Lower Hutt",
        "description": "40 links in the chain <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg' alt='Astro'>"
      
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          175.80322265625,
          -41.01306578700629
        ]
      }
    },
      {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "Boulcott School, Lower Hutt",
        "description": "40 links in the chain <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg' alt='Astro'>"
      
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          175.89111328125,
          -39.77476948529546
        ]
      }
    },
      {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "Boulcott School, Lower Hutt",
        "description": "40 links in the chain <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg' alt='Astro'>"
      
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          175.693359375,
          -38.46219172306828
        ]
      }
    },
      {
      "type": "Feature",
      "properties": {
        "marker-color": "#78f440",
        "marker-size": "small",
        "marker-symbol": "heart",
        "title": "Boulcott School, Lower Hutt",
        "description": "40 links in the chain <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg' alt='Astro'>"
      
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          175.23193359375,
          -37.247821201554274
        ]
      }
    }
  ]
}

			//https://www.mapbox.com/help/building-a-store-locator/

			var positiveMap = L.mapbox.map('chain-of-positivity-map', 'ciiyan.p2l0jh16')
			  .setView([-41.03, 168.157], 5)

      var line = []
      var featureLayer = L.mapbox.featureLayer(geojson) 
        .addTo(positiveMap)
        .eachLayer(function(marker){
          line.push(marker.getLatLng()) 
        })

        
         var polyline_options = {
    color: '#f9e52b'
  };
      L.polyline(line, polyline_options).addTo(positiveMap)
  }