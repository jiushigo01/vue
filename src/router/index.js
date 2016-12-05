import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index';
import Button from '../views/button/';
import Input from '../views/input/';
import List from '../views/list/';
import Slider from '../views/slider/';
import Actionsheet from '../views/Actionsheet/';

Vue.use(VueRouter);

const route = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/button',
      component: Button,
    },
    {
      path: '/input',
      component: Input,
    },
    {
      path: '/list',
      component: List,
    },
    {
      path: '/slider',
      component: Slider,
    },
    {
      path: '/Actionsheet',
      component: Actionsheet,
    },
  ],
});

export default route;
