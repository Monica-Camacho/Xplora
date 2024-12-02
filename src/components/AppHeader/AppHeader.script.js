import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AppHeader",
  setup() {
    const router = useRouter(); // Instancia de Vue Router

    // Define las acciones específicas para la navegación
    const navigateTo = (route) => {
      router.push(route); // Navega a la ruta especificada
    };

    return { navigateTo };
  },
};
