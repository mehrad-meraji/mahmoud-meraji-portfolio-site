import {qF} from "sanity-quick-fields";
import InputSelect from "../../components/inputSelect";

export default {
  name: 'layout',
  type: 'string',
  inputComponent: InputSelect,
  options: {
    options: [
      {
        value: 'none',
        label: 'No layout selected'
      },
      {
        value: 'imageOnLeft',
        label: 'image on Left'
      },
      {
        value: 'imageOnTop',
        label: 'image on Top'
      },
    ]
  }
}
