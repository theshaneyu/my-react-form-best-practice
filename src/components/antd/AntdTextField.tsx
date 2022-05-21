import { Input } from 'antd';
import { FieldProps, getIn } from 'formik';

/**
 * The most important props to to bound between Formik's `FieldProps.field` and
 * Antd's `Input` component under the hood are:
 * - Input.value & field.value
 * - Input.onChange & field.onChange
 * - Input.onBlur & field.onBlur
 *
 * These three are all bound to <Input /> through `{...field}`
 */
export const AntdTextField: React.FC<FieldProps<string>> = ({
  field,
  form,
  ...props
}) => {
  /**
   * `getIn` is a helper function to get the value of a key in an object
   *
   * It won't throw errors even if the key doesn't exist in the object
   *
   * For example, `getIn(form.touched, field.name)` is to check if
   * `field.name` exists in the object of `form.touched`, if so,
   * then return the corresponding value
   *
   * P.S. `form.touched` starts from an empty object. When a field is touched
   * for example, the field of `firstName` is touched, then `form.touched`
   * becomes `{ firstName: true }`, and so on and so forth
   */
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <div>
      <Input {...field} {...props} />
      {errorText && (
        <p style={{ fontSize: 1, color: 'red', marginTop: 3 }}>{errorText}</p>
      )}
    </div>
  );
};
