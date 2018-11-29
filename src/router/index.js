import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
// import Home from '@/view/home/Home'
import Banner from '@/view/banner/Banner'
import MyAccount from '@/view/myaccount/MyAccount'
import AccountDashboard from '@/view/myaccount/component/AccountDashboard'
import AccountInformation from '@/view/myaccount/component/AccountInformation'
import AddressBook from '@/view/myaccount/component/AddressBook'
import MyDownloadableProducts from '@/view/myaccount/component/MyDownloadableProducts'
import MyOrders from '@/view/myaccount/component/MyOrders'
import MyProductReviews from '@/view/myaccount/component/MyProductReviews'
import NewsletterSubscriptions from '@/view/myaccount/component/NewsletterSubscriptions'
import MyCreditCards from '@/view/myaccount/component/MyCreditCards'
import BillingAgreements from '@/view/myaccount/component/BillingAgreements'
import MyWishList from '@/view/myaccount/component/MyWishList'
import Login from '@/view/customer/Login'
import Register from '@/view/customer/Register'
import AboutUs from '@/view/about-us/AboutUs'
import Structure from '@/view/about-us/component/Structure'
import FactoryScene from '@/view/about-us/component/FactoryScene'
import News from '@/view/about-us/component/News'
import Cables from '@/view/cables/Cables'
import MicroUSB from '@/view/cables/component/MicroUSB'
import TypeC from '@/view/cables/component/Type-C'
import Lightning from '@/view/cables/component/Lightning'
import Other from '@/view/cables/component/Other'
import PowerBank from '@/view/cables/PowerBank'
import Temper from '@/view/temper/Temper'
// import TemperType from '@/view/temper/TemperType'
import TemperPro from '@/view/temper/TemperPro'
import IPhone from '@/view/temper/component/IPhone'
import Huawei from '@/view/temper/component/Huawei'
import Oppo from '@/view/temper/component/Oppo'
import Vivo from '@/view/temper/component/Vivo'
import Samsung from '@/view/temper/component/Samsung'
import Others from '@/view/temper/component/Others'

import Support from '@/view/support/Support'
import FAQ from '@/view/support/component/FAQ'
import AfterSalePolicy from '@/view/support/component/AfterSalePolicy'
import Map from '@/view/support/component/Map'
import ContactUs from '@/view/common/ContactUs'
import PrivacyPolicy from '@/view/common/PrivacyPolicy'
import TermsOfService from '@/view/common/TermsOfService'
import WarrantySafety from '@/view/common/Warranty&Safety'
import AddProducts from '@/view/product/AddProducts'
import AddMicroUsb from '@/view/product/component/AddMicroUSB'
import AddTemper from '@/view/product/component/AddTemper'
import AddNews from '@/view/product/component/ueditor_demo'
import NewsDetail from '@/view/common/NewsDetail'
import ForgotPassword from '@/view/customer/ForgotPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
      children: [
        {
          path: '/about-us',
          name: 'AboutUs',
          component: AboutUs,
          redirect: '/about-us/structure',
          children: [
            {
              path: '/about-us/structure',
              name: 'Structure',
              component: Structure
            },
            {
              path: '/factory-scene',
              name: 'FactoryScene',
              component: FactoryScene
            },
            {
              path: '/about-us/terms-of-service',
              name: 'Terms of Service',
              component: TermsOfService
            },
            {
              path: '/about-us/news',
              name: 'BJD News',
              component: News
            }
          ]
        },
        {
          path: '/cables',
          name: 'Cables',
          component: Cables,
          redirect: '/cables/micro-usb',
          children: [
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
            }
          ]
        },

        {
          path: '/my-account',
          name: 'my-account',
          component: MyAccount,
          redirect: '/my-account/account-information',
          meta: {auth: true},
          children: [
            {
              path: '/my-account/account-dashboard',
              name: 'Account Dashboard',
              component: AccountDashboard,
              meta: {auth: true}
            },
            {
              path: '/my-account/account-information',
              name: 'Account Information',
              component: AccountInformation,
              meta: {auth: true}
            },
            {
              path: '/my-account/address-book',
              name: 'Address Book',
              component: AddressBook,
              meta: {auth: true}
            },
            {
              path: '/my-account/my-orders',
              name: 'My Orders',
              component: MyOrders,
              meta: {auth: true}
            },
            {
              path: '/my-account/my-downloadable-products',
              name: 'My Downloadable Products',
              component: MyDownloadableProducts
            },
            {
              path: '/my-account/my-product-reviews',
              name: 'My Product Reviews',
              component: MyProductReviews
            },
            {
              path: '/my-account/newsletter-subscriptions',
              name: 'Newsletter Subscriptions',
              component: NewsletterSubscriptions
            },
            {
              path: '/my-account/my-credit-cards',
              name: 'My Credit Cards',
              component: MyCreditCards
            },
            {
              path: '/my-account/billing-agreements',
              name: 'Billing Agreements',
              component: BillingAgreements
            },
            {
              path: '/my-account/my-wish-list',
              name: 'My Wish List',
              component: MyWishList
            }
          ]
        },
        {
          path: '/temper',
          name: 'Temper',
          component: Temper,
          redirect: '/temper/iPhone',
          children: [
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
            }
          ]
        },
        {
          path: '/support',
          name: 'Support',
          component: Support,
          redirect: '/support/faq',
          children: [
            {
              path: '/support/faq',
              name: 'Frequently Asked Questions',
              component: FAQ
            },
            {
              path: '/support/after-sale-policy',
              name: 'After Sale Policy',
              component: AfterSalePolicy
            },
            {
              path: '/support/map',
              name: 'Map',
              component: Map
            }
          ]
        },
        {
          path: '/contact-us',
          name: 'Contact Us',
          component: ContactUs
        },
        {
          path: '/privacy-policy',
          name: 'Privacy Policy',
          component: PrivacyPolicy
        },
        {
          path: '/terms-of-service',
          name: 'Terms of Service',
          component: TermsOfService
        },
        {
          path: '/warranty-safety',
          name: 'Warranty & Safety',
          component: WarrantySafety
        },
        {
          path: '/add-products',
          name: 'Add Products',
          component: AddProducts,
          redirect: '/add-products/add-usb',
          meta: {auth: true},
          children: [
            {
              path: '/add-products/add-usb',
              name: 'AddMicroUsb',
              component: AddMicroUsb,
              meta: {auth: true}
            },
            {
              path: '/add-products/add-temper',
              name: 'Add Temper',
              component: AddTemper,
              meta: {auth: true}
            },
            {
              path: '/add-news',
              name: 'Add News',
              meta: {auth: true},
              component: AddNews
            }
          ]
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
