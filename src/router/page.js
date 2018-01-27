import Home from '@/components/page/Home.vue'
import PhoneDetail from '@/components/page/PhoneDetail.vue'
import TopDetail from '@/components/page/TopDetail.vue'
import SearchBy from '@/components/page/SearchBy.vue'
import HobbyList from '@/components/page/HobbyList.vue'
import RemarkPhone from '@/components/page/RemarkPhone.vue'

import Paths from '@/config/path.js'

let pages=Paths.pages;
let pageRoutes = [

    {
        path: pages.home,
        name: 'home',
        component: Home
    },
    {
        path: pages.phoneDetail + '/:id',
        name: 'phoneDetail',
        component: PhoneDetail
    },
    {
        path: pages.topDetail + '/:type',
        name: 'topDetail',
        component: TopDetail
    },
    {
        path: pages.searchBy + '/:type/:id',
        name: 'searchBy',
        component: SearchBy
    },
    {
        path: pages.hobbyList + '/:type',
        name: 'hobbyList',
        component: HobbyList
    },
    {
        path: pages.remarkPhone,
        name: 'remarkPhone',
        component: RemarkPhone
    }

];

export default{
    pageRoutes:pageRoutes
}