import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import SendPassModal from '@/components/SendPassModal.vue';

describe('SendPassModal', () => {
  const wrapper = mount(SendPassModal);

  it('Should render SendPassForm component', function() {
    wrapper.getComponent({name:'SendPassForm'});
  });

  it('Should emit "toggle-sendpass" when clicked ', async () => {
    const i = wrapper.get('i');

    await i.trigger('click');

    // assert some action has been performed, like an emitted event.
    expect(wrapper.emitted()).to.have.property('click');
    expect(wrapper.emitted()).to.have.property('toggle-sendpass');
  })
})
