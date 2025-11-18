
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
    "preload": [
      "/Programaci-n-y-Plataformas-Web-Clases/chunk-TQZNNR37.js"
    ],
    "route": "/Programaci-n-y-Plataformas-Web-Clases/formularios"
  },
  {
    "renderMode": 2,
    "preload": [
      "/Programaci-n-y-Plataformas-Web-Clases/chunk-TQZNNR37.js"
    ],
    "route": "/Programaci-n-y-Plataformas-Web-Clases/formularios/formulario"
  },
  {
    "renderMode": 2,
    "preload": [
      "/Programaci-n-y-Plataformas-Web-Clases/chunk-TQZNNR37.js"
    ],
    "route": "/Programaci-n-y-Plataformas-Web-Clases/formularios/formulario-dinamico"
  },
  {
    "renderMode": 2,
    "preload": [
      "/Programaci-n-y-Plataformas-Web-Clases/chunk-TQZNNR37.js"
    ],
    "route": "/Programaci-n-y-Plataformas-Web-Clases/formularios/formulario-mas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 859, hash: 'e5eedf6f7a6ae86a979626aa5d4077ef9108fa50bfad24ec00b33e4ba5f4a71c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1373, hash: '06696b65a6fa0271d7900de58f6f6cd52ea1701494b61bdbc8697000b99277b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 3885, hash: 'b1c0fe06b3534df031c6df33c7150cd027a52ae4e6aa4525f6977030743ce73c', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'formularios/index.html': {size: 3507, hash: '4442a748d8e4241bbf7cc394ecfca6d91dba9ab2874527fee973d59a2c0eb8d0', text: () => import('./assets-chunks/formularios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3721, hash: 'c4064ab4d5e570d641ae9d464b5eadde70ad9bb83064b1d0c4429782c3acca58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'formularios/formulario-dinamico/index.html': {size: 5435, hash: '56e9798119e42174cbbc2eaeeea1165aed03f5be5df8cb861fc5b3e38ec1e760', text: () => import('./assets-chunks/formularios_formulario-dinamico_index_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 4076, hash: '4c3d5e7b9b0c20b589988c7b4c5a4de525351e8505b80365efc373a24517a052', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'proyectos-dos/index.html': {size: 4047, hash: '6bad2fee099994883db9ac413bd5a8d95f46cbe719a4ab9f6b3fffed125a47d0', text: () => import('./assets-chunks/proyectos-dos_index_html.mjs').then(m => m.default)},
    'formularios/formulario-mas/index.html': {size: 5290, hash: '3db6638d4e7785498321650ea9282556320e8c968c8d40a9f9cab6c129c56c01', text: () => import('./assets-chunks/formularios_formulario-mas_index_html.mjs').then(m => m.default)},
    'formularios/formulario/index.html': {size: 4814, hash: 'cd992ef07ed71bab065c52b4e43a9ae9716038635b6c7e72d1124db9d19cb3a9', text: () => import('./assets-chunks/formularios_formulario_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
