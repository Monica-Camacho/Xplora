import{Q as d}from"./QPage.01d70cf7.js";import{F as l}from"./FiltroMenu.46ebd9ed.js";import{b as u}from"./bttnAmarillo.f5586156.js";import{E as m,q as n,s as p,t as e,C as i,z as a,G as g,A as _}from"./index.1fe9c731.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{B as h}from"./BuscarDestino.2126039a.js";import"./render.882db384.js";var v={name:"TarjetaDestino",components:{bttnAmarillo:u},props:{lugar:{type:String,required:!0},titulo:{type:String,required:!0},descripcion:{type:String,required:!0},imagen:{type:String,required:!0}}};const b={class:"tarjeta-destino"},j=["src","alt"],f={class:"destino-contenido"},C={class:"destino-lugar"},D={class:"destino-titulo"},E={class:"destino-descripcion"},x={class:"boton-contenedor"};function B(s,r,t,A,F,M){const c=m("bttnAmarillo");return n(),p("div",b,[e("img",{class:"destino-imagen",src:s.imagen,alt:s.titulo},null,8,j),e("div",f,[e("p",C,i(s.lugar),1),e("h3",D,i(s.titulo),1),e("p",E,i(s.descripcion),1),e("div",x,[a(c,{class:"boton-pequeno",label:"Leer m\xE1s"})])])])}var o=y(v,[["render",B],["__scopeId","data-v-b47a2390"]]);const L={class:"buscar-contenedor"},q={class:"contenido-principal"},$={class:"tarjetas-contenedor"},R={__name:"DetalleDestinosPage",setup(s){return(r,t)=>(n(),g(d,{style:{display:"flex","flex-direction":"column","align-items":"center",padding:"20px"}},{default:_(()=>[e("div",L,[a(h)]),e("div",q,[a(l,{title:"Filtrar por:",sections:[{title:"Ubicaci\xF3n",options:["Ciudad de M\xE9xico","Reforma","Tzacualoacan"]},{title:"Categor\xEDa",options:["Lugares ic\xF3nicos","Eventos y Festividades","Gastronom\xEDa Aut\xE9ntica","Arte y Cultura","Escapadas Cercanas","Vida Nocturna y Entretenimiento"]},{title:"Idiomas",options:["Espa\xF1ol","Ingl\xE9s","Franc\xE9s","Italiano"]},{title:"Mostrar resultados con",options:["Entradas libres","Destacados"]}]}),e("div",$,[t[0]||(t[0]=e("h2",{class:"titulo-seccion"},"Conoce m\xE1s del lugar",-1)),a(o,{lugar:"Par\xEDs",titulo:"La Ciudad del Amor",descripcion:"Descubre los encantos de Par\xEDs, hogar de la ic\xF3nica Torre Eiffel, el rom\xE1ntico Sena y el arte sin igual del Louvre. Una ciudad donde cada esquina cuenta una historia.",imagen:"src/assets/images/tarjetadestinos/paris.jpg"}),a(o,{lugar:"Londres",titulo:"Historia y Modernidad",descripcion:"Explora la vibrante Londres, con su emblem\xE1tico Big Ben, el majestuoso Palacio de Buckingham y el moderno London Eye. Una ciudad donde lo cl\xE1sico y lo contempor\xE1neo se mezclan.",imagen:"src/assets/images/tarjetadestinos/londres.jpg"}),a(o,{lugar:"Roma",titulo:"La Ciudad Eterna",descripcion:"Vive la historia en Roma, cuna del Imperio Romano, con maravillas como el Coliseo, la Fontana di Trevi y la Ciudad del Vaticano. Una mezcla \xFAnica de cultura, gastronom\xEDa y arte.",imagen:"src/assets/images/tarjetadestinos/roma.jpg"}),a(o,{lugar:"Ciudad de M\xE9xico",titulo:"Coraz\xF3n de Mesoam\xE9rica",descripcion:"Sum\xE9rgete en la Ciudad de M\xE9xico, una urbe vibrante con una rica herencia cultural. Desde las pir\xE1mides de Teotihuac\xE1n hasta el ic\xF3nico Z\xF3calo, la historia y modernidad se encuentran aqu\xED.",imagen:"src/assets/images/tarjetadestinos/cdmx.jpg"}),a(o,{lugar:"Dub\xE1i",titulo:"El Lujo del Futuro",descripcion:"D\xE9jate sorprender por Dub\xE1i, con sus rascacielos futuristas, mercados tradicionales y lujosos hoteles. Vive la mezcla \xFAnica de modernidad y tradici\xF3n \xE1rabe.",imagen:"src/assets/images/tarjetadestinos/dubai.jpg"})])])]),_:1}))}};export{R as default};
