const routes = [
  {
    path: "/",
    component: () => import("layouts/CombinedLayout.vue"), // Layout principal
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") }, // Página de inicio
      { path: "pruebas", component: () => import("pages/PruebasPage.vue") }, // Página "Pruebas"
      { path: "whatsapp", component: () => import("pages/WhatsappPage.vue") }, // Página "Whatsapp"
      { path: "nombre", component: () => import("pages/NombrePage.vue") }, // Página "Nombre"
      {
        path: "mantenimiento",
        component: () => import("pages/MantenimientoPage.vue"),
      }, // Página "Nombre"
    ],
  },

  // Ruta de error para capturar rutas no existentes
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/MantenimientoPage.vue"),
  },
];

export default routes;
