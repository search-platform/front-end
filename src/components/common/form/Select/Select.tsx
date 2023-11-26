import {forwardRef} from "react";
import styles from './Select.module.scss';
import * as RadixSelect from "@radix-ui/react-select";
import cx from "classnames";
import IconChevronDown from "../../icons/IconChevronDown";
import FieldLabel from "../FieldLabel/FieldLabel";
import FieldError from "../FieldError/FieldError";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];
  onChange?: (value: string) => void;
  value?: string;
  withEmptyOption?: boolean;
  errorMessage?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select ({
  name,
  label,
  placeholder,
  disabled,
  options,
  onChange,
  value,
  withEmptyOption,
  errorMessage,
  ...props
}, ref) {
  return (
    <div className={styles.box}>
      {label ? <FieldLabel id={name}>{label}</FieldLabel> : null}
      <RadixSelect.Root value={value} disabled={disabled} {...props} onValueChange={onChange}>
        <RadixSelect.Trigger
          className={cx(styles.trigger)}
          aria-label={placeholder}
        >
          <RadixSelect.Value placeholder={placeholder} ref={ref} />
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.content} position="popper" sideOffset={12}>
            <RadixSelect.ScrollUpButton className={styles.scrollButton}>
              <IconChevronDown className={styles.topChevronIcon} />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className={styles.viewport}>
              {withEmptyOption ? (
                <RadixSelect.Item value={''} className={cx(styles.item, {
                  [styles.selected]: value === '',
                })}>
                  <RadixSelect.ItemText>{placeholder ?? ''}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ) : null}
              {options.map(option => (
                <RadixSelect.Item value={option.value} className={cx(styles.item, {
                  [styles.selected]: value === option.value,
                })} key={option.value}>
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className={styles.scrollButton}>
              <IconChevronDown />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {errorMessage ? <FieldError error={errorMessage} className={styles.errorMessage} /> : null}
    </div>
  );
});

export default Select;
