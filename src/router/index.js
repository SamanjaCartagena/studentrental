import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/LoginPage.vue'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
        component:HomePage, 
    },
    {
        path: '/login',
        
        component:Login, 
    },
    
    
]

});

export default router;