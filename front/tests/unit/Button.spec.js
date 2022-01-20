/* eslint-disable */
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';
/*
Use find() along with exists() to verify whether an element is in the DOM.
Use get() if you expect the element to be in the DOM.
The data mounting option can be used to set default values on a component.
Use get() with isVisible() to verify the visibility of an element that is in the DOM
*/
describe('Button.vue', function() {
  const wrapper = mount(Button);

  it('Should have prop href, can change', async function() {
    expect(wrapper.find('[href="https://ikodi.eu"]')).exist;

    await wrapper.setProps({href: "http://test.fr"});

    expect(wrapper.find('[href="http://test.fr"]').exist);
    expect(wrapper.find('[href="https://ikodi.eu"]')).exist;
  });

  it('Should show a text that can change', async function() {
    expect(wrapper.text()).equals('Bouton');

    await wrapper.setProps({text: "testeur"});

    expect(wrapper.text()).equals('testeur');
    expect(wrapper.text()).not.equals('Bouton');
  });

  it('Should have prop width and color that can change', async function() {
    expect(wrapper.find('[style="background-color: white; width: fit-content;"]')).exist;

    await wrapper.setProps({width: "100%"});
    await wrapper.setProps({color: "blue"});

    expect(wrapper.find('[style="background-color: blue; width: 100%;"]')).exist;
    expect(wrapper.find('[style="background-color: white; width: fit-content;"]').exists()).to.be.false;
  });


  it('Should have prop className that can change', async function() {
    expect(wrapper.find('[className=""]')).exist;

    await wrapper.setProps({className: "test"});

    expect(wrapper.find('[className="test"]')).exist;
  });


  it('Should have icon not visible if undefined (no error)', async function() {
    expect(wrapper.get('span').isVisible()).to.be.false;

    await wrapper.setProps({icon: "test"});

    expect(wrapper.get('span').isVisible()).to.be.true;
  });
});
