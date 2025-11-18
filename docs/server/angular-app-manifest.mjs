
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Programaci-n-y-Plataformas-Web-Clases/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Programaci-n-y-Plataformas-Web-Clases"
  },
  {
    "renderMode": 2,
    "route": "/Programaci-n-y-Plataformas-Web-Clases/perfil"
  },
  {
    "renderMode": 2,
    "route": "/Programaci-n-y-Plataformas-Web-Clases/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/Programaci-n-y-Plataformas-Web-Clases/proyectos-dos"
  },
  {
    "renderMode": 2,
    "route": "/Programaci-n-y-Plataformas-Web-Clases/formulario"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 475, hash: '48bfe562519d3c9c18164c4181134f711f3fbc23bd1f180fd6759f001197f46b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: '5a82491fd32d863d913f258f9766afaed0121c1a64ccaf1cdbb128895e0f4e77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 228, hash: '76a950c7a35bc0cf22eaf5585a2c2c0ab14eaac8cdabddec35575b4cf8abb335', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 228, hash: '76a950c7a35bc0cf22eaf5585a2c2c0ab14eaac8cdabddec35575b4cf8abb335', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'formulario/index.html': {size: 228, hash: '76a950c7a35bc0cf22eaf5585a2c2c0ab14eaac8cdabddec35575b4cf8abb335', text: () => import('./assets-chunks/formulario_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 228, hash: '76a950c7a35bc0cf22eaf5585a2c2c0ab14eaac8cdabddec35575b4cf8abb335', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'proyectos-dos/index.html': {size: 228, hash: '76a950c7a35bc0cf22eaf5585a2c2c0ab14eaac8cdabddec35575b4cf8abb335', text: () => import('./assets-chunks/proyectos-dos_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
