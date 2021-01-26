import React from 'react';
import { Select } from '@sanity/ui';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';

const InputSelect = React.forwardRef(({type, value, onChange}, ref) => (
    <FormField label={type.title} description={type.description}>
      <Select
        value={value}
        ref={ref}
        onChange={event => {onChange(PatchEvent.from(set(event.target.value)))}}
      >
        {
          type.options.options.map(opts => <option
            selected={opts.value === value}
            value={opts.value}
          >{opts.label}</option>)
        }
      </Select>
    </FormField>
  )
);

export default InputSelect;
