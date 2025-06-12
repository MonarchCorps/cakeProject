/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactSVG } from "react-svg";
import React, {type InputHTMLAttributes, type Ref } from "react";
import { TailSpin } from "react-loader-spinner";

type BaseInputProps = {
    labelStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    errorStyle?: React.CSSProperties;
    error?: any;
    label?: string;
    formik?: any;
    loading?: boolean;
    leftIcon?: ReactSVG;
    name?: string;
    ref?: Ref<HTMLInputElement>;
};
export const BaseInput = ({
                              labelStyle,
                              inputStyle,
                              errorStyle,
                              formik,
                              name = "",
                              // leftIcon,
                              // style,
                              // error,
                              label,
                              loading,
                              ...props
                          }: BaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
    errorStyle = errorStyle ?? {};
    inputStyle = inputStyle ?? {};
    if (formik?.errors[name] && formik?.touched[name])
        inputStyle["borderColor"] = errorStyle["color"];

    return (
        <div className={"flex flex-col gap-1"}>
            <label style={labelStyle} className={"font-light text-sm"} htmlFor={props.id}>
                {label}
            </label>
            {props.type === "submit" && loading && (
                <p style={{ margin: "auto", marginTop: "15px" }}>
                    <TailSpin
                        visible={true}
                        height={30}
                        width={30}
                        color="#ec9c3f"
                        ariaLabel="tail-spin-loading"
                        strokeWidth={5}
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </p>
            )}
            {!(props.type === "submit" && loading) && (
                <input
                    value={formik?.values[name]}
                    onBlur={formik?.handleBlur(name)}
                    onChange={formik?.handleChange(name)}
                    style={{ ...inputStyle }}
                    {...props}
                    className={"h-[40px] text-sm p-3 border-1"}
                />
            )}

            {formik?.touched[name] && (
                <p style={{ color: "red", fontSize: '12px' }}> {formik?.errors[name]} </p>
            )}
        </div>
    );
};
