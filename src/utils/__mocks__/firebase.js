module.exports = {
  productDb: {
    get: () =>
      Promise.resolve({
        docs: [
          {
            id: '1',
            data: () => ({
              title: 'Test',
              description: 'test description',
              pictureUrl: 'test picture',
              price: 10,
            }),
          },
        ],
      }),
  },
};
