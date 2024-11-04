const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pruebas', component: () => import('pages/PruebasPage.vue') },  // Página "Pruebas"
      { path: 'Whatsapp', component: () => import('pages/WhatsappPage.vue') },  // Página "Whatsapp"
      { path: 'Nombre', component: () => import('pages/NombrePage.vue') }  // Página "Nombre"
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
