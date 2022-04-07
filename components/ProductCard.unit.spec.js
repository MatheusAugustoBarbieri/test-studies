import axios from 'axios';
import { mount } from '@vue/test-utils';
import ProductCard from '@/components/ProductCard';

describe('ProductCard', () => {
  it('O componente foi montado', async () => {
    const { data } = await axios.get('http://localhost:3000/teste');

    const wrapper = mount(ProductCard, {
      propsData: {
        product: {
          id: data[0].id,
          title: 'blabla',
          price: data[0].price,
        },
      },
    });

    expect(wrapper.html()).toBeDefined();
    expect(wrapper.text()).toContain('12.33');
    expect(wrapper.text()).toContain('blabla');
  });
  it('Deve ser igual ao snapshot', async () => {
    const { data } = await axios.get('http://localhost:3000/teste');

    const wrapper = mount(ProductCard, {
      propsData: {
        product: {
          id: data[0].id,
          title: 'blaba',
          price: data[0].price,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
