import AimmButton from './src/main';

/* istanbul ignore next */
AimmButton.install = function(Vue) {
  Vue.component(AimmButton.name, AimmButton);
};

export default AimmButton;
