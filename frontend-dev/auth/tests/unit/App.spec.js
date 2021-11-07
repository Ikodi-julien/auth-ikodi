import {mount} from "@vue/test-utils";
import {expect} from "chai";
import App from "@/App.vue";

describe('App.vue', function() {
  const wrapper = mount(App);

  it('Should contain Landing, SignupModal and SendpassModal', function() {
    expect(wrapper.findComponent({name: 'Landing'}).exists()).to.be.true;
    expect(wrapper.findComponent({name: 'SignupModal'}).exists()).to.be.true;
    expect(wrapper.findComponent({name: 'SendPassModal'}).exists()).to.be.true;
  })

  it('Should toggle "showSignup" prop when "toggle-signup" is emitted', async function() {
    const signupModal = wrapper.getComponent({name: 'SignupModal'});
    expect(signupModal.find('[class="modal --showModal"]').exists()).to.be.false;

    await signupModal.findComponent({name: 'SignupModal'}).find('i').trigger('click');

    expect(wrapper.find('[class="modal --showModal"]').exists()).to.be.true;
  });


  it('Should toggle "showSendpass" when "toggle-sendpass" is emitted', async function() {
    const sendPassModal = wrapper.getComponent({name: 'SendPassModal'});
    expect(sendPassModal.find('[class="modal --showModal"]').exists()).to.be.false;

    await sendPassModal.find('i').trigger('click');

    expect(wrapper.find('[class="modal --showModal"]').exists()).to.be.true;

  });
})
