/* eslint-disable */
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  const wrapper = mount(LoginForm);

  it('Should render and have email and password input + a button', () => {

    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const Button = wrapper.findComponent('Button');

    expect(emailInput.exists()).to.be.true;
    expect(passwordInput.exists()).to.be.true;
    expect(Button.exists()).to.be.true;
  })

  it('Should update email and password input value', async () => {
    // const wrapper = mount(LoginForm);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    await emailInput.setValue('test@email.fr');
    await passwordInput.setValue('bob');
    expect(emailInput.element.value).to.equal('test@email.fr');
    expect(passwordInput.element.value).to.equal('bob');
  });

  describe('Submit Button', () => {
    it('Button should emit "submit"', async () => {
      const Button = wrapper.findComponent('Button');

      // trigger the element
      await Button.trigger('click');

      // assert some action has been performed, like an emitted event.
      expect(wrapper.emitted()).to.have.property('click');
      expect(wrapper.emitted()).to.have.property('submit');
    })
  })

});
