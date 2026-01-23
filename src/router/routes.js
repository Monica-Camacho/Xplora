const routes = [
  {
    path: "/",
    component: () => import("layouts/CombinedLayout.vue"), // Layout principal
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") }, // Página de inicio -K
      { path: "index", component: () => import("pages/IndexPage.vue") }, // Página de inicio -K
      {
        path: "transporte",
        component: () => import("pages/TransportePage.vue"),
      }, // -K
      {
        path: "TransporteBusqueda",
        component: () => import("pages/TransporteBusquedaPage.vue"),
      }, // -K
      {
        path: "TransporteDetalle",
        component: () => import("pages/TransporteDetallePage.vue"),
      }, // -K
      {
        path: "privacidad",
        component: () => import("pages/PrivacidadPage.vue"),
      }, // -K
      { path: "perfil", component: () => import("pages/PerfilPage.vue") }, // -K
      { path: "contacto", component: () => import("pages/ContactoPage.vue") }, // -K
      { path: "ofertas", component: () => import("pages/OfertasPage.vue") }, // -K

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
      {
        path: "experiencias",
        component: () => import("pages/ExperienciasPage.vue"),
      }, // -Z
      { path: "hospedaj", component: () => import("pages/HospedajPage.vue") }, // -Z
    ],
  },

  // Ruta de error para capturar rutas no existentes
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/MantenimientoPage.vue"),
  },
];

export default routes;
