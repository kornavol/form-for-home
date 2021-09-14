import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Box, TextField, useMediaQuery } from "@material-ui/core";

import {styles} from './style';

interface ITenantsForm {
    firstName: string 
    lastName: string
    phone: number | string
    email: string
    salary: string
}

interface IProps {
    values: ITenantsForm;
    handleInputValue(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
    errors: any
    classes?: any;
}

const ContactData: React.FC<IProps> = ({ values, handleInputValue, errors }) => {

    /* add media query */
    const matches = useMediaQuery('(max-width:750px)');

    const inputFieldNames : Array<{[key: string] : string}> = [
        {
            name: "firstName",
            label: "Full Name",
            id: "t-w-firstName",
            value: values.firstName
        },
        {
            name: "lastName",
            label: "Last Name",
            id: "t-w-lastName",
            value: values.lastName
        },
    ];

    interface IFieldInput {
        name: string, 
        id: string, 
        label : string, 
        value:any
    }

    const inputFieldCont : Array<IFieldInput> = [
        {
            name: "email",
            label: "Email",
            id: "t-w-email",
            value: values.email
        },
        {
            name: "phone",
            label: "Phone",
            id: "t-w-phone",
            value: values.phone
        }
    ];

    return (
        <form noValidate autoComplete="off">

            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                {inputFieldNames.map((input: {[key: string] : string}) => {
                    return (
                        <TextField
                            key={input.id}
                            id={input.id}
                            label={input.label}
                            name={input.name}
                            value={input.value}

                            onChange={handleInputValue}
                            onBlur={handleInputValue}

                            error={!!errors[input.name]}
                            {...(errors[input.name] && {
                                error: true,
                                helperText: errors[input.name]
                            })}

                            variant="outlined"
                            margin="normal"
                            style={matches ? { width: "100%" } : { width: "45%" }}
                        />
                    );
                })}
            </Box>

            {inputFieldCont.map((input: IFieldInput) => {
                return (
                    <TextField
                        key={input.id}
                        id={input.id}
                        label={input.label}
                        name={input.name}
                        value={input.value}

                        onChange={handleInputValue}
                        onBlur={handleInputValue}

                        error={!!errors[input.name]}
                        {...(errors[input.name] && {
                            error: true,
                            helperText: errors[input.name]
                        })}

                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                );
            })}
        </form>
    );
};

/* in general add oportunity to use class as property of material ui component */
export default withStyles(styles)(ContactData);