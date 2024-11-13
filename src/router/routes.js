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
        component: () => import("src/pages/MantenimientoPage.vue"),
      },
      {
        path: "destinos",
        component: () => import("src/pages/DestinosPage.vue"),
      },
      {
        path: "/detalledestinos",
        component: () => import("src/pages/DetalleDestinosPage.vue"),
      },
      {
        path: "turismo",
        component: () => import("src/pages/TurismoPage.vue"),
      },
      {
        path: "explorador",
        component: () => import("pages/ExploradorPage.vue"),
      }, // Página de Mapa Interactivo
    ],
  },

  // Ruta de error para capturar rutas no existentes
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/MantenimientoPage.vue"),
  },
];

export default routes;
