import { Field } from 'react-final-form';

import { TextField } from '@folio/stripes/components';
import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';

export const FieldDefaultValue = ({
  
}) => {
  return (
    <>
      {
        true
          ? (
            <FieldSelectionFinal
              name="name"
              id="id"
              dataOptions={[]}
            />
          )
          : (
            <Field
              component={TextField}
            />
          )
      }
    </>
  );
};
