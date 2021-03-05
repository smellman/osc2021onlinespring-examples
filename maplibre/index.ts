import './index.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Map } from 'maplibre-gl'

new Map({
  container: 'mapid',
  style: 'https://tile.openstreetmap.jp/styles/maptiler-basic-ja/style.json',
  center: [140.084556, 36.104611],
  zoom: 10,
})
