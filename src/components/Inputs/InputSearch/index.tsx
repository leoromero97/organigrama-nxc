import React, { forwardRef, MouseEvent, useId, useState } from "react";
import { InputSearchPropTypes } from "../types";
import Icon from "@/components/Icon";
import InputAtom from "../InputAtom";

const InputSearch = forwardRef<HTMLInputElement, InputSearchPropTypes>(
  (
    {
      className,
      hideIcon,
      hideEraseButton,
      onChange,
      value,
      defaultValue = "",
      buttonProps,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);

    const handleEraseText = (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      if (!isControlled) {
        setInternalValue("");
      }
      if (onChange) {
        const event = {
          target: { name: props.name, value: "" },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      if (onChange) {
        onChange(e);
      }
    };
    const inputValue = isControlled ? value : internalValue;

    return (
      <InputAtom
        {...props}
        id={props.id ?? id}
        ref={ref}
        value={inputValue}
        onChange={handleChange}
        className="min-w-80"
        contentLeft={!hideIcon && <Icon className="h-6 min-h-6 w-6 min-w-6" icon="IcSearch" />}
        contentRight={
          !hideEraseButton &&
          inputValue && (
            <button
              {...buttonProps}
              className="bg-transparent p-1 rounded-sm"
              onClick={(e) => {
                handleEraseText(e);
              }}
            >
              <Icon icon="IcClose" />
            </button>
          )
        }
      />
    );
  }
);
InputSearch.displayName = "InputSearch";
export default InputSearch;
