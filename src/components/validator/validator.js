import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withPropsOnChange from 'recompose/withPropsOnChange';
import withHandlers from 'recompose/withHandlers';

import validators from 'validators';

export default function validator(fieldNames = []) {
  return function validatorHOC(component) {
    return compose(
      withState(
        'submitted',
        'setSubmitted',
        false,
      ),
      withState(
        'fields',
        'updateFields',
        fieldNames.reduce((prev, curr) => Object.assign(prev, {
          [curr]: { valid: false },
        }), {}),
      ),
      withPropsOnChange(
        ['fields'],
        ({ fields }) => ({
          valid: Object.keys(fields).every(key => fields[key].valid),
        }),
      ),
      withHandlers({
        onSubmit: ({
          validCallback,
          setSubmitted,
          valid,
          fields,
        }) => (e) => {
          e.preventDefault();

          setSubmitted(() => true);

          if (!valid) {
            return;
          }

          validCallback(fields);
        },
        onChange: ({ updateFields }) => (e) => {
          const { target: { name, value } } = e;

          updateFields(fields => ({
            ...fields,
            [name]: {
              ...fields[name],
              value,
              valid: validators[name](value),
            },
          }));
        },
      }),
    )(component);
  };
}
