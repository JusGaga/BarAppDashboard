import {createMemoryHistory, createRouter} from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import OrderList from "../views/OrderList.vue";
import OrderDetails from "../views/OrderDetails.vue";
import Cart from "../views/Cart.vue";
import CocktailList from "../views/CocktailList.vue";
import BarmakerList from "../views/BarmakerList.vue";

const routes: any = [
    {path: "/", component: BarmakerList},
    {path: "/cocktails/:barmakerId", component: CocktailList, props: true},
    {path: "/cart", component: Cart},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/order", component: OrderList},
    {path: "/order/:orderId", component: OrderDetails, props: true},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router