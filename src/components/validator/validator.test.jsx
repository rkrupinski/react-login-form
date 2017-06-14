jest.mock('validators');

import React from 'react';
import { mount } from 'enzyme';

import validator from '.';

let TestForm = ({
  onSubmit,
  onChange,
  submitted,
  fields,
}) => (
  <form onSubmit={onSubmit}>
    {submitted && <div className="submitted">submitted</div>}
    <input onChange={onChange} name="foo" />
    {fields.foo.valid && <div className="valid">valid</div>}
  </form>
);

TestForm = validator(['foo'])(TestForm);

let component;
let callback;

describe('validator', function () {
  beforeEach(function () {
    callback = jest.fn();

    component = mount(<TestForm validCallback={callback} />);
  });

  it('should set the \'submitted\' prop accordingly', function () {
    expect(component.find('.submitted').length).toBe(0);

    component.find('form').simulate('submit');

    expect(component.find('.submitted').length).toBe(1);
  });

  it('should let one inspect field validation status', function () {
    expect(component.find('.valid').length).toBe(0);

    const input = component.find('[name="foo"]');

    input.simulate('change', { target: { name: 'foo', value: 'LO' } });

    expect(component.find('.valid').length).toBe(0);

    input.simulate('change', { target: { name: 'foo', value: 'LOL' } });

    expect(component.find('.valid').length).toBe(1);
  });

  it('should invoke the callback upon submitting a valid form', function () {
    component.find('form').simulate('submit');

    expect(callback.mock.calls).toEqual([]);

    component.find('[name="foo"]')
        .simulate('change', { target: { name: 'foo', value: 'LOL' } });

    component.find('form').simulate('submit');

    expect(callback.mock.calls).toEqual([
      [
        { foo: { valid: true, value: 'LOL' } },
      ],
    ]);
  });
});
