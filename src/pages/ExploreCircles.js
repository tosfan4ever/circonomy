import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../redux/toggleDrawer'
import { Wrapper } from '../components/PagesStyles/ExploreCircles.styles'
import CircleFilter from '../components/CircleFilter'
import Feature from '../components/Feature'

import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import MarkerCluster from '../components/MarkCluster'
import 'leaflet/dist/leaflet.css'
const position = [51.505, -0.09]
const mapStyle = { height: "90vh" }


const ExploreCircles = () => {

  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  const [markers, setMarkers] = useState([
    {
      position: { lng: -122.673447, lat: 45.5225581 },
      text: "Voodoo Doughnut"
    },
    {
      position: { lng: -122.6781446, lat: 45.5225512 },
      text: "Bailey's Taproom"
    },
    {
      position: { lng: -122.67535700000002, lat: 45.5192743 },
      text: "Barista"
    },
    {
      position: { lng: -122.65596570000001, lat: 45.5199148000001 },
      text: "Base Camp Brewing"
    }
  ]);

  const handleClick = () => {
    setMarkers([
      {
        position: { lng: -110.673447, lat: 40.5225581 },
        text: "Voodoo Doughnut"
      },
      {
        position: { lng: -110.6781446, lat: 40.5225512 },
        text: "Bailey's Taproom"
      },
      {
        position: { lng: -110.67535700000002, lat: 40.5192743 },
        text: "Barista"
      }
    ]);
  };

  return (
    <Wrapper>
      <Map center={position} zoom={2} zoomControl={false} style={mapStyle} maxZoom={20}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} />
        <ZoomControl position='bottomright' />
      </Map>
      <div className="filter">
        <p>Find your cicle</p>
        <CircleFilter />
      </div>
      <div className="feats">
        <Feature />
      </div>
      <button style={{display: 'none'}} onClick={handleClick}>Change cluster</button>
    </Wrapper>
  );
};

export default ExploreCircles
