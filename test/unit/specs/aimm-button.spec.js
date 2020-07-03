import { createTest, destroyVM } from '../util';
import AimmButton from 'packages/aimm-button';

describe('AimmButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(AimmButton, true);
    expect(vm.$el).to.exist;
  });
});

