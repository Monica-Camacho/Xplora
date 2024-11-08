const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),  // Layout principal
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },  // Página de inicio
      { path: 'pruebas', component: () => import('pages/PruebasPage.vue') },  // Página "Pruebas"
      { path: 'whatsapp', component: () => import('pages/WhatsappPage.vue') },  // Página "Whatsapp"
      { path: 'nombre', component: () => import('pages/NombrePage.vue') }  // Página "Nombre"
    ]
  },

  // Ruta de error para capturar rutas no existentes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
