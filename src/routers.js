  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import VueResource from 'vue-resource'
  //const list = resolve => require(['./components/list.vue'], resolve)
  import goods from './components/goods/goods.vue';
  import seller from './components/seller/seller.vue';
  import ratings from './components/ratings/ratings.vue';

  Vue.use(VueRouter);
  Vue.use(VueResource);

  const routes=[
      {
         path: "/",
         redirect:'/goods'
      },
      {
          path: '/goods',
          name: 'goods',
          component: goods
      },
      {
        path: '/seller',
        name: 'seller',
        component: seller
      },
      {
        path: '/ratings',
        name: 'ratings',
        component: ratings
      }
   ]

const router = new VueRouter({
   mode: 'history',
   routes
 })
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)){

     next()

  }else{
       next()
  }


})
export default router;
