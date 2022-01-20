import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import SignupModal from '@/components/SignupModal.vue';

describe('SignupModal', () => {
  const wrapper = mount(SignupModal);

  it('Should render SignupForm component', function() {
    wrapper.getComponent({name:'SignupForm'});
  });

  it('Should emit "toggle-signup" when clicked ', async () => {
    const i = wrapper.get('i');

    await i.trigger('click');

    expect(wrapper.emitted()).to.have.property('click');
    expect(wrapper.emitted()).to.have.property('toggle-signup');
  })
})
