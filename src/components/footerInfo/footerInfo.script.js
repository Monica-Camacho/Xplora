import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "FooterInfo",
  setup() {
    const router = useRouter();

    // Lista de enlaces para la sección de "Información Legal"
    const legalLinksList = [
      { title: "Términos y Condiciones", link: "/mantenimiento" },
      { title: "Política de Privacidad", link: "/mantenimiento" },
      { title: "Aviso Legal", link: "/mantenimiento" },
    ];

    // Lista de enlaces para la sección de "Enlaces rápidos"
    const linksList = [
      { title: "Destinos", link: "/destinos" },
      { title: "Hospedaje", link: "/hospedaj" },
      { title: "Transporte", link: "/transporte" },
      { title: "Turismo", link: "/turismo" },
      { title: "Experiencias", link: "/experiencias" },
    ];

    // Función para manejar la navegación
    const navigate = (link) => {
      router.push(link); // Navega a la ruta correspondiente
    };

    return { linksList, legalLinksList, navigate };
  },
};
