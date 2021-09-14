import React, { FC } from "react";

import { RadioGroup, FormControlLabel } from "@material-ui/core";
import { SalaryStyles, GreenRadio } from "./style";

interface ITenantsForm {
    firstName: string;
    lastName: string;
    phone: number | string;
    email: string;
    salary: string;
    formSubmitted?: boolean;
    success?: boolean;
}

interface IProps {
    values: ITenantsForm;
    handleInputValue(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void;
    classes?: any;
}

const Salary: FC<IProps> = ({ values, handleInputValue }) => {
    const classes = SalaryStyles();

    const range: string[] = [
        "0 - 1.000",
        "1.000 - 2.000",
        "2.000 - 3.000",
        "3.000 - 4.000",
        "Mehr als 4.000",
    ];

    return (
        <form noValidate autoComplete="off">
            <h3 className={classes.root}>Indicate your salary</h3>
            <RadioGroup
                aria-label="salary"
                name="salary"
                value={values.salary}
                onChange={handleInputValue}
            >
                {range.map((salary: string) => (
                    <FormControlLabel
                        key={salary}
                        value={salary}
                        control={<GreenRadio />}
                        label={salary}
                    />
                ))}
            </RadioGroup>
        </form>
    );
};

export default Salary;
