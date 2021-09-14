import React, { useState } from "react";

const PostContactForm = async (
    values: ITenantsForm,
    successCallback: any,
    errorCallback: any
) => {
    // do stuff
    // if successful
    if (true) successCallback();
    else errorCallback();
};

interface ITenantsForm {
    firstName: string;
    lastName: string;
    phone: number | string;
    email: string;
    salary: string;
    formSubmitted?: boolean;
    success?: boolean;
}

const initialFormValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    salary: "0 - 1.000",
    formSubmitted: false,
    success: false,
};

export const useFormControls = () => {
    interface IErrors {
        firstName?: string;
        lastName?: string;
        phone?: any;
        email?: string;
        salary?: string;
    }
    const [values, setValues] = useState<ITenantsForm>(initialFormValues);
    const [errors, setErrors] = useState({} as IErrors);

    const validate = (fieldValues: IErrors = values) => {
        let temp: IErrors = { ...errors };

        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required.";

        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required.";

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid.";
        }

        if ("phone" in fieldValues) {
            temp.phone = fieldValues.phone ? "" : "This field is required.";
            if (fieldValues.phone)
                temp.phone = /^\d{12}$/.test(fieldValues.phone)
                    ? ""
                    : "Phone is not valid.";
        }

        setErrors({
            ...temp,
        });
    };

    const handleInputValue = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        validate({ [name]: value });
    };

    const handleSuccess = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: true,
        });
    };

    const handleError = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: false,
        });
    };

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.firstName &&
            fieldValues.lastName &&
            fieldValues.email &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };

    const handleFormSubmit = async () => {
        const isValid =
            Object.values(errors).every((x) => x === "") && formIsValid();
        if (isValid) {
            await PostContactForm(values, handleSuccess, handleError);
        }
    };

    return {
        values,
        errors,
        handleInputValue,
        handleFormSubmit,
        formIsValid,
    };
};
