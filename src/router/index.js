import { createRouter, createWebHistory} from 'vue-router'
import UsuariosList from '@/components/UsuariosList.vue'
import UsuariosCad from '@/components/UsuariosCad.vue'
import UsuarioLogin from '@/components/UsuarioLogin.vue'

const routes =[
    {
        path: '/',
        name: 'Home',
        component: UsuariosList
    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: UsuariosList
    },
    {
        path: '/cadastrar',
        name: 'Cadastrar',
        component: UsuariosCad
    },
    {
        path: '/login',
        name: 'Login',
        component: UsuarioLogin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router