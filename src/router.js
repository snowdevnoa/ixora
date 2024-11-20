import { createMemoryHistory, createRouter } from 'vue-router';

import HelloWorldView from './components/HelloWorld.vue';
import HomeView from './components/Home.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/helloworld', component: HelloWorldView },
];

// create router instance
const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;