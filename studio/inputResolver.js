import InputSelect from "./components/inputSelect";

export default function resolveInput(type) {
  if (type.name === 'string' && type.options && type.options.options) {
    return InputSelect
  }
}
