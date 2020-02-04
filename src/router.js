import VueRouter from 'vue-router';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import WhoWeAre from './pages/WhoWeAre';
import JoinUs from "./pages/JoinUs";
import ThankYou from "./pages/ThankYou";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/who-we-are',
        name: 'who-we-are',
        component: WhoWeAre,
        meta: {
            title: 'Who we are — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/joinus',
        name: 'joinus',
        component: JoinUs,
        meta: {
            title: 'Join us — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
        meta: {
            title: 'Contacts — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: ThankYou,
        meta: {
            title: 'Thank you — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/policy',
        name: 'policy',
        component: Policy,
        meta: {
            title: 'Policy — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms,
        meta: {
            title: 'Terms — Plumber Near Me',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    if (!nearestWithMeta) {
        return next()
    }

    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });
        tag.setAttribute('data-vue-router-controlled', '');
        return tag;
    })
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;