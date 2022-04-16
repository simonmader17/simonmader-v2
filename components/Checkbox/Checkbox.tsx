import styles from "./Checkbox.module.scss";

import { ChangeEventHandler, MouseEventHandler } from "react";

interface ICheckbox {
  id: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onMouseEnter?: MouseEventHandler<HTMLInputElement | HTMLLabelElement>;
  onMouseLeave?: MouseEventHandler<HTMLInputElement | HTMLLabelElement>;
  disabled?: boolean;
}

const Checkbox = ({
  id,
  label,
  onChange,
  onMouseEnter,
  onMouseLeave,
  disabled,
}: ICheckbox) => {
  return (
    <fieldset className={styles["checkbox-container"]}>
      <input
        type="checkbox"
        className={styles["checkbox"]}
        id={id}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
      />
      <label
        className={styles["checkbox-label"]}
        htmlFor={id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </label>
    </fieldset>
  );
};

export default Checkbox;
