import axios from 'axios';
import { mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard';

const mountProductCard = (data) => {
  const product = {
    id: data[0].id,
    title: 'blabla',
    price: data[0].price,
  };
  return {
    wrapper: mount(ProductCard, {
      propsData: {
        product,
      },
    }),
    product,
  };
};

describe('ProductCard', () => {
  it('O componente foi montado', async () => {
    const { data } = await axios.get('http://localhost:3000/teste');
    const { wrapper } = mountProductCard(data);
    expect(wrapper.html()).toBeDefined();
    expect(wrapper.text()).toContain('12.33');
    expect(wrapper.text()).toContain('blabla');
  });
  it('Deve ser igual ao snapshot', async () => {
    const { data } = await axios.get('http://localhost:3000/teste');
    const { wrapper } = mountProductCard(data);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('emita um evento ao clicar no botao do card', async () => {
    const { data } = await axios.get('http://localhost:3000/teste');
    const { wrapper, product } = mountProductCard(data);
    await wrapper.find('button').trigger('click');
    console.log(wrapper.emitted());
    expect(wrapper.emitted().addToCard).toBeTruthy();

    expect(wrapper.emitted().addToCard.length).toBe(1);

    expect(wrapper.emitted().addToCard[0]).toEqual([{ product }]);
  });
});
