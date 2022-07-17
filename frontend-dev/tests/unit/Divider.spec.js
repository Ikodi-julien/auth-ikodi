import {expect} from 'chai';
import {mount} from '@vue/test-utils';
import Divider from '@/components/Divider.vue';

describe('Divider', () => {
  const wrapper = mount(Divider);

  it('Should render text if provided', async function() {
    expect(wrapper.get('span').text()).equals('');

    await wrapper.setProps({text: 'ou'});

    expect(wrapper.get('span').text()).equal('ou');

  })
})
