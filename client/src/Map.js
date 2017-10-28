import React, { Component } from 'react';
/* global google */

// let testLat = this.props.dataPoints.brews[0].lat;
// let testLng = this.props.dataPoints.brews[0].lng;

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props.initialPosition;

    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat,
        lng
      },
      zoom: 10
    });
  }

  goToSearch = () => {
    let localHikes = this.props.dataPoints.hikes;
    let localBrews = this.props.dataPoints.brews;

    console.log(typeof localHikes[0].lat, "sup")

    const { lat, lng } = this.props.initialPosition;
    this.map.panTo({lat, lng})

    console.log("from SEARCH", this.props.dataPoints.brews, this.props.dataPoints.brews[0])
    console.log(localHikes, localBrews, " :Local data")

    var infoWindow = new google.maps.InfoWindow({
      content: "hi"
    })

    var hike = new google.maps.Marker({
      position: {
        lat: localHikes[0].lat,
        lng: localHikes[0].lng
      },
      icon: {
        path: "M22.132 4.262c.022-2.056-1.668-3.758-3.729-3.736-2.106-.022-3.808 1.68-3.797 3.736-.011 2.105 1.691 3.791 3.797 3.796 2.06-.005 3.751-1.691 3.729-3.796zm10.842 20.63l-12.062-14.633c-.627-.93-4.122-1.321-5.6-.134l-5.869 10.679 1.444 9.027c1.468 2.357 4.38-.028 3.562-1.316l-.985-6.395 2.536-5.12v12l-6 16c-1.042 3.494 3.969 5.365 5 2l7-18v-9l-2.937-4.062c-.146-.174-.124-.437.056-.588.179-.146.437-.123.583.05l10.034 11.866c1.615 2.207 4.851-.14 3.238-2.374zm-4.615 20.298l-5.925-14.743-2.434 6.553 3.477 10.169c1.399 3.275 6.316 1.359 4.882-1.979zm15.713 3.383l.022.034c.235.28.65.308.93.078.246-.213.292-.588.123-.856l-11.166-19.387-.033-.039c-.225-.27-.639-.309-.919-.073-.246.213-.269.571-.111.856l11.154 19.387z",
        scale: .5,
        strokeWeight:0,
        fillOpacity: 1,
        strokeColor:"#B40404"
      },
      map: this.map,
      title: localHikes[0].name
    });

    var hike1 = new google.maps.Marker({
      position: {
        lat: localHikes[1].lat,
        lng: localHikes[1].lng
      },
      icon: {
        path: "M22.132 4.262c.022-2.056-1.668-3.758-3.729-3.736-2.106-.022-3.808 1.68-3.797 3.736-.011 2.105 1.691 3.791 3.797 3.796 2.06-.005 3.751-1.691 3.729-3.796zm10.842 20.63l-12.062-14.633c-.627-.93-4.122-1.321-5.6-.134l-5.869 10.679 1.444 9.027c1.468 2.357 4.38-.028 3.562-1.316l-.985-6.395 2.536-5.12v12l-6 16c-1.042 3.494 3.969 5.365 5 2l7-18v-9l-2.937-4.062c-.146-.174-.124-.437.056-.588.179-.146.437-.123.583.05l10.034 11.866c1.615 2.207 4.851-.14 3.238-2.374zm-4.615 20.298l-5.925-14.743-2.434 6.553 3.477 10.169c1.399 3.275 6.316 1.359 4.882-1.979zm15.713 3.383l.022.034c.235.28.65.308.93.078.246-.213.292-.588.123-.856l-11.166-19.387-.033-.039c-.225-.27-.639-.309-.919-.073-.246.213-.269.571-.111.856l11.154 19.387z",
        scale: .5,
        strokeWeight:0,
        fillOpacity: 1,
        strokeColor:"#B40404"
      },
      map: this.map,
      title: localHikes[1].name
    });

    var hike2 = new google.maps.Marker({
      position: {
        lat: localHikes[2].lat,
        lng: localHikes[2].lng
      },
      icon: {
        path: "M22.132 4.262c.022-2.056-1.668-3.758-3.729-3.736-2.106-.022-3.808 1.68-3.797 3.736-.011 2.105 1.691 3.791 3.797 3.796 2.06-.005 3.751-1.691 3.729-3.796zm10.842 20.63l-12.062-14.633c-.627-.93-4.122-1.321-5.6-.134l-5.869 10.679 1.444 9.027c1.468 2.357 4.38-.028 3.562-1.316l-.985-6.395 2.536-5.12v12l-6 16c-1.042 3.494 3.969 5.365 5 2l7-18v-9l-2.937-4.062c-.146-.174-.124-.437.056-.588.179-.146.437-.123.583.05l10.034 11.866c1.615 2.207 4.851-.14 3.238-2.374zm-4.615 20.298l-5.925-14.743-2.434 6.553 3.477 10.169c1.399 3.275 6.316 1.359 4.882-1.979zm15.713 3.383l.022.034c.235.28.65.308.93.078.246-.213.292-.588.123-.856l-11.166-19.387-.033-.039c-.225-.27-.639-.309-.919-.073-.246.213-.269.571-.111.856l11.154 19.387z",
        scale: .5,
        strokeWeight:0,
        fillOpacity: 1,
        strokeColor:"#B40404"
      },
      map: this.map,
      title: localHikes[2].name
    });

    var hike3 = new google.maps.Marker({
      position: {
        lat: localHikes[3].lat,
        lng: localHikes[3].lng
      },
      icon: {
        path: "M22.132 4.262c.022-2.056-1.668-3.758-3.729-3.736-2.106-.022-3.808 1.68-3.797 3.736-.011 2.105 1.691 3.791 3.797 3.796 2.06-.005 3.751-1.691 3.729-3.796zm10.842 20.63l-12.062-14.633c-.627-.93-4.122-1.321-5.6-.134l-5.869 10.679 1.444 9.027c1.468 2.357 4.38-.028 3.562-1.316l-.985-6.395 2.536-5.12v12l-6 16c-1.042 3.494 3.969 5.365 5 2l7-18v-9l-2.937-4.062c-.146-.174-.124-.437.056-.588.179-.146.437-.123.583.05l10.034 11.866c1.615 2.207 4.851-.14 3.238-2.374zm-4.615 20.298l-5.925-14.743-2.434 6.553 3.477 10.169c1.399 3.275 6.316 1.359 4.882-1.979zm15.713 3.383l.022.034c.235.28.65.308.93.078.246-.213.292-.588.123-.856l-11.166-19.387-.033-.039c-.225-.27-.639-.309-.919-.073-.246.213-.269.571-.111.856l11.154 19.387z",
        scale: .5,
        strokeWeight:0,
        fillOpacity: 1,
        strokeColor:"#B40404"
      },
      map: this.map,
      title: localHikes[3].name
    });

    var hike4 = new google.maps.Marker({
      position: {
        lat: localHikes[4].lat,
        lng: localHikes[4].lng
      },
      icon: {
        path: "M22.132 4.262c.022-2.056-1.668-3.758-3.729-3.736-2.106-.022-3.808 1.68-3.797 3.736-.011 2.105 1.691 3.791 3.797 3.796 2.06-.005 3.751-1.691 3.729-3.796zm10.842 20.63l-12.062-14.633c-.627-.93-4.122-1.321-5.6-.134l-5.869 10.679 1.444 9.027c1.468 2.357 4.38-.028 3.562-1.316l-.985-6.395 2.536-5.12v12l-6 16c-1.042 3.494 3.969 5.365 5 2l7-18v-9l-2.937-4.062c-.146-.174-.124-.437.056-.588.179-.146.437-.123.583.05l10.034 11.866c1.615 2.207 4.851-.14 3.238-2.374zm-4.615 20.298l-5.925-14.743-2.434 6.553 3.477 10.169c1.399 3.275 6.316 1.359 4.882-1.979zm15.713 3.383l.022.034c.235.28.65.308.93.078.246-.213.292-.588.123-.856l-11.166-19.387-.033-.039c-.225-.27-.639-.309-.919-.073-.246.213-.269.571-.111.856l11.154 19.387z",
        fillColor: '#000000',
        fillOpacity: 1,
        scale: .5,
        strokeWeight: 0
      },
      map: this.map,
      title: localHikes[4].name
    });

    var brew = new google.maps.Marker({
      position: {
        lat: parseInt(localBrews[0].lat),
        lng: parseInt(localBrews[0].lng)
        },icon: {
          path: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z",
          fillColor: '#000000',
          fillOpacity: 1,
          scale:.5,
          strokeWeight: 0
          },
      map: this.map,
      title: localBrews[0].name
    });

    var brew1 = new google.maps.Marker({
      position: {
        lat: localBrews[1].lat,
        lng: localBrews[1].lng
      },
      icon: {
        path: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z",
        fillColor: '#000000',
        fillOpacity: 1,
        scale:.5,
        strokeWeight: 0
        },
      map: this.map,
      title: localBrews[1].name
    });

    var brew2 = new google.maps.Marker({
      position: {
        lat: localBrews[2].lat,
        lng: localBrews[2].lng
      },
      icon: {
        path: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z",
        fillColor: '#000000',
        fillOpacity: 1,
        scale:.5,
        strokeWeight: 0
        },
      map: this.map,
      title: localBrews[2].name
    });

    var brew3 = new google.maps.Marker({
      position: {
        lat: localBrews[3].lat,
        lng: localBrews[3].lng
      },
      icon: {
        path: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z",
        fillColor: '#000000',
        fillOpacity: 1,
        scale:.5,
        strokeWeight: 0
        },
      map: this.map,
      title: localBrews[3].name
    });

    var brew4 = new google.maps.Marker({
      position: {
        lat: localBrews[4].lat,
        lng: localBrews[4].lng
      },
      icon: {
        path: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z",
        fillColor: '#000000',
        fillOpacity: 1,
        scale:.5,
        strokeWeight: 0
        },
      map: this.map,
      title: localBrews[4].name
    });


  }

  render() {

    return (
      <div className="map-container" ref="map" style={{width: 600, height: 600, border: '1px solid black'}}>
        
      </div>
    )
  }
}

export default Map;
