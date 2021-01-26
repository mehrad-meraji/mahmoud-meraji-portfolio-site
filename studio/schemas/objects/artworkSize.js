import {qF} from "sanity-quick-fields";
import InputSelect from "../../components/inputSelect";

export default {
  title: 'Artwork Size',
  name: 'artworkSize',
  type: 'string',
  inputComponent: InputSelect,
  options: {
    options: [
      {
        value: 'none',
        label: 'Default'
      },
      {
        value: 'small',
        label: 'Small'
      },
      {
        value: 'large',
        label: 'Large'
      },
    ]
  }
}
