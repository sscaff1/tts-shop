import { productDb } from 'utils/firebase';

const productActions = {
  START_CREATE: 'START_CREATE',
  END_CREATE: 'END_CREATE',
  // add another comment
  START_GET: 'START_GET',
  END_GET: 'END_GET',

  createProduct: (name, description, price, pictureUrl) => dispatch => {
    dispatch({ type: productActions.START_CREATE });
    return productDb
      .doc()
      .set({ title: name, description, price, pictureUrl })
      .then(() => {
        dispatch({ type: productActions.END_CREATE });
      });
  },
  getProducts: () => dispatch => {
    dispatch({ type: productActions.START_GET });
    return productDb.get().then(snapshot => {
      const products = snapshot.docs.map(docSnapshot => {
        return { ...docSnapshot.data(), id: docSnapshot.id };
      });
      dispatch({ type: productActions.END_GET, products });
    });
  },
};

export default productActions;
