import { createRouter, createWebHistory } from "vue-router"

import Formulario from "./components/Formulario/index.vue"
import Http from "./components/Http.vue"


const routes = [
    /* ----- definición de la ruta raíz ---- */
    /* { path: '/', component: Binding  }, */
    { path: '/', redirect: '/formulario'  },
    
    /* ---- definición de las rutas activas ---- */
    { path: '/formulario', component: Formulario  },
    { path: '/http', component: Http  },

    /* ------ definición del comportamiento del rutear para rutas no existentes ----- */
    { path: '/:pathmatch(.*)*', redirect: '/formulario' }
]

const router = createRouter({
    history: createWebHistory(),
    routes // es igual a -> routes: routes
})

export default router