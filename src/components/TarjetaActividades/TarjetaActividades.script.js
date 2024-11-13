// components/TarjetaDestino/TarjetaDestino.script.js
import bttnAmarillo from "src/components/bttnAmarillo/bttnAmarillo.vue";

export default {
  name: "TarjetaDestino",
  components: {
    bttnAmarillo,
  },
  props: {
    lugar: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
};