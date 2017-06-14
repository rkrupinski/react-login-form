import * as utils from '.';

describe('identity', function () {
  it('should return the exact value it\'s passed', function () {
    const primitive = 'foo';
    const nonPrimitive = () => {};

    expect(utils.identity(primitive)).toBe(primitive);
    expect(utils.identity(nonPrimitive)).toBe(nonPrimitive);
  });
});

describe('mq', function () {
  it('should render rules wrapped in a media querry', function () {
    expect(utils.mq('768px', `
      display: flex;
    `)).toMatchSnapshot();
  });
});

describe('cols', function () {
  it('should return proper CSS string', function () {
    expect(utils.cols(3, 12)).toMatchSnapshot();
  });
});;
