import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/LoginPage.vue'
import Signup from '../components/SignUp.vue'

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
       {
        path: '/signup',
        
        component:Signup, 
    },
    
]

});

export default router;