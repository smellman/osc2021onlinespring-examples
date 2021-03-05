import './index.css'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import proj4 from 'proj4'

const from = 'EPSG:4326'
const to = 'EPSG:3857'
const center = proj4(from, to, [140.084556, 36.104611])

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.jp/styles/maptiler-basic-ja/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: center,
    zoom: 10
  })
})
