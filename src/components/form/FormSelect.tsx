import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import Select, { SelectProps } from '../common/form/Select/Select';

const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: UseControllerProps<TFieldValues, TName> & SelectProps,
) => {
  const { field, fieldState } = useController<TFieldValues, TName>(props);
  return <Select {...props} {...field} />;
};

export default FormSelect;

