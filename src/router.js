import Vue from "vue";
import Router from "vue-router";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import AppHeader from "./layout/AppHeader";
import AboutApp from "./views/AboutApp";
import AppFooter from "./layout/AppFooter";
import Covid19Statistics from "./views/Covid19Statistics";
import CountryIndex from "./views/CountryIndex";
import PinnedCountry from "./views/PinnedCountry";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "components",
            components: {
                default: Components,
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                default: Landing,
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                default: Login,
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                default: Register,
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                default: Profile,
            }
        },
        {
            path: "/about",
            name: "aboutApp",
            components: {
                header: AppHeader,
                default: AboutApp,
                footer: AppFooter
            }
        },
        {
            path: "/covid",
            name: "covid19Statistics",
            components: {
                header: AppHeader,
                default: Covid19Statistics,
                footer: AppFooter
            }
        },
        {
            path: "/country",
            name: "countryIndex",
            components: {
                header: AppHeader,
                default: CountryIndex,
                footer: AppFooter
            }
        },
        {
            path: "/pinned",
            name: "pinnedCountry",
            components: {
                header: AppHeader,
                default: PinnedCountry,
                footer: AppFooter
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
