import React, { useEffect, useState, type ChangeEvent } from "react";
import { InputAtomPropTypes } from "../types";

const InputAtom = React.forwardRef<HTMLInputElement, InputAtomPropTypes>(
  (
    {
      label,
      error,
      disabled,
      characterCounter,
      supportingText,
      onChange,
      contentLeft,
      contentRight,
      style,
      className,
      areaProps,
      labelProps,
      supportingTextProps,
      characterCounterProps,
      inputStyle,
      inputClassname,
      value,
      ...props
    },
    ref
  ) => {
    const [isTyping, setIsTyping] = useState(false);
    const [internalValue, setInternalValue] = useState(
      props.defaultValue ?? ""
    );
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;
    useEffect(() => {
      if (isControlled) {
        setInternalValue(value as string);
      }
    }, [value, isControlled]);

    const maxLimit =
      characterCounter && characterCounter > 0
        ? characterCounter
        : props.maxLength
        ? props.maxLength
        : 50;
    const handleInput = (): void => {
      setIsTyping(true);
    };
    const handleBlur = (): void => {
      setIsTyping(false);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) {
        onChange(e);
        setInternalValue(e.target.value);
      } else {
        setInternalValue(e.target.value);
      }
    };

    return (
      <div
        className={["w-full flex flex-col gap-2", className]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        <label
          {...labelProps}
          className={["text-sm font-semibold", disabled && "text-gray-600"]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </label>
        <div
          {...areaProps}
          className={[
            "border border-white rounded-md w-full flex items-center gap-4 px-3 py-2 h-10",
            isTyping && "border-2",
            error && "border-red-100",
            disabled && "border-gray-600",
            areaProps?.className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {contentLeft ?? null}
          <input
            {...props}
            ref={ref}
            value={inputValue}
            onInput={handleInput}
            onClick={handleInput}
            onBlur={handleBlur}
            className={[
              "w-full h-full text-inherit border-none bg-transparent focus:outline-none placeholder:text-gray-100",
              inputClassname,
            ]
              .filter(Boolean)
              .join(" ")}
            maxLength={maxLimit}
            onChange={handleChange}
            style={inputStyle}
          />
          {contentRight || null}
        </div>
        <div className="flex w-full justify-between">
          {supportingText && (
            <span
              {...supportingTextProps}
              className={[
                "flex gap-2 flex-1 break-words",
                error && "text-red-1000",
                supportingTextProps?.className,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {error && <span className="h-4 w-4">x</span>}
              {supportingText}
            </span>
          )}
          {characterCounter && (
            <span
              {...characterCounterProps}
              className={[
                "whitespace-nowrap text-gray-50",
                characterCounterProps?.className,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {`${internalValue.toString().length}/${characterCounter}`}
            </span>
          )}
        </div>
      </div>
    );
  }
);
InputAtom.displayName = "InputAtom";
export default InputAtom;
