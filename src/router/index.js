import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
import Login from '@/view/customer/Login'
import Register from '@/view/customer/Register'
import PowerBank from '@/view/cables/PowerBank'
import TemperPro from '@/view/temper/TemperPro'
import AddMicroUsb from '@/view/product/component/AddMicroUSB'
import AddTemper from '@/view/product/component/AddTemper'
import EditCables from '@/view/product/component/EditCables'
import EditTemper from '@/view/product/component/EditTemper'
import AddNews from '@/view/product/component/ueditor_demo'
import NewsDetail from '@/view/common/NewsDetail'
import ForgotPassword from '@/view/customer/ForgotPassword'
// import Cables from '@/view/cables/Cables'
import MicroUSB from '@/view/cables/component/MicroUSB'
import TypeC from '@/view/cables/component/Type-C'
import Lightning from '@/view/cables/component/Lightning'
import Other from '@/view/cables/component/Other'
// import PowerBank from '@/view/cables/PowerBank'
// import Temper from '@/view/temper/Temper'
// import TemperType from '@/view/temper/TemperType'
// import TemperPro from '@/view/temper/TemperPro'
import IPhone from '@/view/temper/component/IPhone'
import Huawei from '@/view/temper/component/Huawei'
import Oppo from '@/view/temper/component/Oppo'
import Vivo from '@/view/temper/component/Vivo'
import Samsung from '@/view/temper/component/Samsung'
import Others from '@/view/temper/component/Others'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ForgotPassword
    },
    {
      path: '/home',
      name: 'Home',
      component: Layout,
      // redirect: '/home/add-products',
      children: [
        {
          path: '/add-product/add-cables',
          name: 'Add Cables',
          component: AddMicroUsb,
          meta: {auth: true}
        },
        {
          path: '/add-product/add-temper',
          name: 'Add Temper',
          component: AddTemper,
          meta: {auth: true}
        },
        {
          path: '/add-product/add-news',
          name: 'Add News',
          meta: {auth: true},
          component: AddNews
        },
        {
          path: '/edit-product/edit-cables/:productId',
          name: 'Edit Cables',
          meta: {auth: true},
          component: EditCables
        },
        {
          path: '/edit-product/edit-temper/:productId',
          name: 'Edit Temper',
          meta: {auth: true},
          component: EditTemper
        },
        // {
        //   path: '/home/add-products',
        //   name: 'Add Products',
        //   component: AddProducts,
        //   redirect: '/add-products/add-usb',
        //   meta: {auth: true},
        //   children: [
        //     {
        //       path: '/add-products/add-usb',
        //       name: 'AddMicroUsb',
        //       component: AddMicroUsb,
        //       meta: {auth: true}
        //     },
        //     {
        //       path: '/add-products/add-temper',
        //       name: 'Add Temper',
        //       component: AddTemper,
        //       meta: {auth: true}
        //     },
        //     {
        //       path: '/add-news',
        //       name: 'Add News',
        //       meta: {auth: true},
        //       component: AddNews
        //     }
        //   ]
        // },
        {
          path: '/cables/micro-usb',
          name: 'Micro USB',
          component: MicroUSB
        },
        {
          path: '/cables/lightning',
          name: 'Lightning',
          component: Lightning
        },
        {
          path: '/cables/type-c',
          name: 'Type-C',
          component: TypeC
        },
        {
          path: '/cables/other',
          name: 'Other',
          component: Other
        },
        {
          path: '/temper/iPhone',
          name: 'iPhone',
          component: IPhone
        },
        {
          path: '/temper/huawei',
          name: 'Huawei',
          component: Huawei
        },
        {
          path: '/temper/oppo',
          name: 'Oppo',
          component: Oppo
        },
        {
          path: '/temper/vivo',
          name: 'Vivo',
          component: Vivo
        },
        {
          path: '/temper/samsung',
          name: 'Samsung',
          component: Samsung
        },
        {
          path: '/temper/others',
          name: 'Others',
          component: Others
        },
        {
          path: '/power-bank/:productId',
          name: 'Products',
          component: PowerBank
        },
        {
          path: '/temper-pro/:productId',
          name: 'Temper',
          component: TemperPro
        },
        {
          path: '/news-detail/:newsId',
          name: 'BJD News',
          component: NewsDetail
        }
      ]
    }
  ]
})
