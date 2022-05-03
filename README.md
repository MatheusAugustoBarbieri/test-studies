Lembrar:

> import {mount} from '@vue/test-utils';

> const wrapper = mount(ProductCard, {

    propsData: {
        product: {}
    }

});

> mount nao recebe so o elemento montado e sim uma API que contem varias opcoes para fazer expect()

> expect(wrapper.vm).toBeDefined();

> wrapper.vm
> wrapper.element
> wrapper.classes()
> wrapper.exists()
> wrapper.html()
> wrapper.text()
> wrapper.text().toContain('')
> wrapper.find('button')
> .toMatchSnapshot()
> beforeEach(()=> {})
> afterEach(()=> {})
> wrapper.find('button').trigger('click');

> yarn add -D @types/jest
