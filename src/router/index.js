import { createRouter, createWebHistory } from 'vue-router'
import acceuil from '@/views/acceuil.vue';
import liste from '@/views/liste.vue';
import detail from '@/views/detail.vue';
import about from '@/views/about.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [                       /* views: acceuil sonné mieux pour moi, je vais fork JS  */
    {path: '/', name: "acceuil", component: acceuil}, /*en sois tout les .vue sont des component. */
    {
      path: '/todos',
      name: 'todos',
      component: liste,
      meta: {requiresAuth: true},
    },
    {
      path: '/todos/:id',
      name: 'detail',
      component: detail,
      props: true,
      meta: {requiresAuth: true},
    },
    {path: '/about', component: about},

  ],
})

export default router
