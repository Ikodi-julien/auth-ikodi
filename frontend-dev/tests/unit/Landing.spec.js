import{expect} from 'chai';
import {mount} from '@vue/test-utils';
import Landing from '@/components/Landing.vue';

describe('Landing', function() {
  const wrapper = mount(Landing);

  it('Should emit "toggle-signup" from Options', async function() {
    const button = wrapper.find('[data-test="toggle-signup"]');

    await button.trigger('click');

    expect(wrapper.emitted()).to.have.property('toggle-signup');
  });


  it('Should emit "toggle-sendpass" from Options', async function() {
    const p = wrapper.find('#toggle-sendpass');

    await p.trigger('click');

    expect(wrapper.emitted()).to.have.property('toggle-sendpass');
  });
})
