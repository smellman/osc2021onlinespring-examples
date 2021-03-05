import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'

const map = new L.Map('mapid')
L.tileLayer(
  'https://tile.openstreetmap.jp/styles/maptiler-basic-ja/{z}/{x}/{y}.png',
  {
    maxZoom: 18,
    attribution: `&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
      contributors`,
  }
).addTo(map)
map.setView([36.104611, 140.084556], 10)
