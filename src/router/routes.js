const routes = [
  {
    path: "/",
    component: () => import("layouts/CombinedLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "index", component: () => import("pages/IndexPage.vue") },
      {
        path: "transporte",
        component: () => import("pages/TransportePage.vue"),
      },
      {
        path: "TransporteBusqueda",
        component: () => import("pages/TransporteBusquedaPage.vue"),
      },
      {
        path: "TransporteDetalle",
        component: () => import("pages/TransporteDetallePage.vue"),
      },
      {
        path: "privacidad",
        component: () => import("pages/PrivacidadPage.vue"),
      },
      { path: "perfil", component: () => import("pages/PerfilPage.vue") },
      { path: "contacto", component: () => import("pages/ContactoPage.vue") },
      { path: "ofertas", component: () => import("pages/OfertasPage.vue") },
      { path: "pruebas", component: () => import("pages/PruebasPage.vue") },
      { path: "whatsapp", component: () => import("pages/WhatsappPage.vue") },
      { path: "nombre", component: () => import("pages/NombrePage.vue") },

      // ✅ Corregido: removido 'src/' para consistencia
      {
        path: "mantenimiento",
        component: () => import("pages/MantenimientoPage.vue"),
      },
      { path: "destinos", component: () => import("pages/DestinosPage.vue") },

      // ✅ Corregido: quitada la '/' del inicio
      {
        path: "detalledestinos",
        component: () => import("pages/DetalleDestinosPage.vue"),
      },

      { path: "turismo", component: () => import("pages/TurismoPage.vue") },
      {
        path: "explorador",
        component: () => import("pages/ExploradorPage.vue"),
      },
      {
        path: "experiencias",
        component: () => import("pages/ExperienciasPage.vue"),
      },

      // ⚠️ OJO: Verifica si es 'hospedaj' o 'hospedaje'
      { path: "hospedaj", component: () => import("pages/HospedajPage.vue") },
    ],
  },

  // Ruta 404 (Mantenimiento)
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/MantenimientoPage.vue"),
  },
];

export default routes;
