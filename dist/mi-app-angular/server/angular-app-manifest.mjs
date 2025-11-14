
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 475, hash: '2a89a009d671f38212aedc2d17ca9f1171650f14ccfca11fdab9d9c682d1a2c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: '450f73c03f7bb0b37a55c2370cb8f63537057df294a46f8f458bc4edbe5cd748', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2705, hash: '1ab48a7eab0c321220626b57edf5f1c813a733314c9e6fc027f457c40f214c30', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 2869, hash: '4332bcead1796933b44d4cec2b0bc364b17767a9bca93d2caee798dec4623ad4', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 3060, hash: '64898abcab7a27fe75e682a2aeb6ba06eb67379738784ab99c7d5ed0e306bf54', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'proyectos-dos/index.html': {size: 3031, hash: '8be68a9cc85d549fa5f6eea70f819d4c358fcdac1b4367cc41ec20463339feb6', text: () => import('./assets-chunks/proyectos-dos_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
