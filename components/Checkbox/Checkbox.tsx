import styles from "./Checkbox.module.scss";

import { ChangeEventHandler, MouseEventHandler } from "react";

interface ICheckbox {
  id: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onMouseEnter?: MouseEventHandler<HTMLInputElement | HTMLLabelElement>;
  onMouseLeave?: MouseEventHandler<HTMLInputElement | HTMLLabelElement>;
}

const Checkbox = ({
  id,
  label,
  onChange,
  onMouseEnter,
  onMouseLeave,
}: ICheckbox) => {
  return (
    <fieldset className={styles["checkbox-container"]}>
      <input
        type="checkbox"
        // className="group absolute m-2 opacity-50 hover:cursor-pointer"
        className={styles["checkbox"]}
        id={id}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <label
        className={styles["checkbox-label"]}
        // className="before:border-headerFooter before:bg-headerFooter flex items-center gap-2 before:flex before:h-[1.2em] before:w-[1.2em] before:items-center before:justify-center before:border-2 before:content-[''] hover:cursor-pointer hover:before:text-gray-400 hover:before:content-['\002714'] group-checked:before:bg-red-400"
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
