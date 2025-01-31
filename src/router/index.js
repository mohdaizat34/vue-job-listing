import {createRouter, createWebHistory } from  'vue-router'
import  HomeView  from  '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue';
import JobView from '@/views/JobView.vue';
import NotFoundViewfrom from '@/views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [ 
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'JobsView',
            component: JobsView
        },
        {
            path: '/job/:id',
            name: 'JobView',
            component: JobView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundViewfrom
        }
    ]
});

export default router