import Cart from './cart.js';
describe('cart', () => {
  const cart = new Cart();
  const product = {
    title: 'Tenis',
    price: 35388,
  };
  const product2 = {
    title: 'Tenis',
    price: 41872,
  };
  describe('getTotal', () => {
    it('verifica se o getTotal() existe e foi executado', () => {
      expect(cart.getTotal()).toEqual(0);
    });
    it('deve multiplicar quantidade e preço e retornar o total', () => {
      const item = {
        product,
        quantity: 2,
      };
      cart.add(item);
      expect(cart.getTotal(item)).toEqual(70776);
    });
    it('nao mais do que um produto exista', () => {
      cart.add({
        product,
        quantity: 1,
      });
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product,
        quantity: 2,
      });
      expect(cart.getTotal()).toEqual(70776);
    });
    it('garantir q continua funcionando se voce remover um produto', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 1,
      });
      cart.remove(product);
      expect(cart.getTotal()).toEqual(41872);
    });
  });
  describe('checkout', () => {
    it('deve retornar um objeto com o total e a lista de itens', () => {
      cart.add({
        product,
        quantity: 3,
      });
      cart.add({
        product: product2,
        quantity: 1,
      });
      expect(cart.checkout()).toMatchSnapshot();
    });
    it('deve limpar o carrinho quando o usuario ir para o checkout', () => {
      cart.add({
        product: product2,
        quantity: 3,
      });
      cart.checkout();
      expect(cart.getTotal()).toEqual(0);
    });
    it('summary deve retornar valores que sejam maiores que 0', () => {
      cart.add({
        product,
        quantity: 3,
      });
      cart.add({
        product: product2,
        quantity: 5,
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal()).toBeGreaterThan(0);
    });
  });
});
