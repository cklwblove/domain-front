export default {
  globals: true,
  environment: 'jsdom',
  testTimeout: 500000,
  coverage: {
    reporter: ['text', 'json', 'html']
  }
};
