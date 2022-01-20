import {mount} from '@vue/test-utils';
import chai, { expect } from 'chai';
import Options from '@/components/Options.vue';

describe('Options', function() {
  const wrapper = mount(Options);

  it('Should emit "toggle-sendpass"', async function() {

    const p = wrapper.find('#toggle-sendpass');

    await p.trigger('click');

    expect(wrapper.emitted()).to.have.property('toggle-sendpass')
  })


  it('Should emit "toggle-signup"', async function() {

    const Button = wrapper.find('[data-test="toggle-signup"');

    await Button.trigger('click');

    expect(wrapper.emitted()).to.have.property('toggle-signup')
  })
})
