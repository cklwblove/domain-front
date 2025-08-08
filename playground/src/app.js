import createPetStoreHttpRequest from '@domain/pet-store-sdk';

createPetStoreHttpRequest({
  baseURL: '/api',
  debug: false,
  mock: false,
  requestInterceptors(config) {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';

    return config;
  },
  responseInterceptors(response) {
    return response;
  }
});

export function onRouterCreated({ router }) {
  console.log('onRouterCreated', router);
}

export function onAppCreated({ app }) {
  console.log('onAppCreated', app);
}

export function onMounted({ app, router }) {
  console.log('onMounted', app, router);
}

export const router = {
  // @ts-ignore
  scrollBehavior(to, from) {
    console.log('scrollBehavior', to, from);
  }
};
