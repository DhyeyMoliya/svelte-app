
import MainContainer from './modules/main-container.svelte';
import Container1 from './modules/container1.svelte';
import Container2 from './modules/container2.svelte';
import Page1 from './modules/page1.svelte';
import Page2 from './modules/page2.svelte';
import Page3 from './modules/page3.svelte';

const routes = [
    {
        name: '/',
        // component: MainContainer,
        layout: MainContainer,
        nestedRoutes: [
            {
                name: 'container1',
                component: Container1,
                nestedRoutes: [
                    { name: 'index', component: Page1 },
                    { name: 'page2', component: Page2 }
                ]
            },
            {
                name: 'container2',
                component: Container2,
                nestedRoutes: [
                    { name: 'index', component: Page1 },
                    { name: 'page2', component: Page2 }
                ]
            },
        ]
    },
    {
        name: '404',
        path: '404',
        redirectTo: '/container1'
    }
];

export { routes };