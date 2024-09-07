export enum MapLayer {
  Template = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export enum MapSetup {
  Latitude = 59.9386,
  Longitude = 30.3141,
  Zoom = 10,
}

export enum UrlMapMarker {
  Default = '/public/img/svg/pin-default.svg',
  Active = '/public/img/svg/pin-active.svg',
}
