import React, { FC } from "react";

import { SummaryStyles } from "./style";

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
    tenantsForm: ITenantsForm;
    classes?: any;
}

const Summary: FC<IProps> = ({ tenantsForm }) => {
    const classes = SummaryStyles();

    return (
        <div id="w-t-summary">
            <h3 className={classes.root}>Please check your information</h3>
            <p>
                <span className={classes.title}>First name:</span>{" "}
                {tenantsForm.firstName}
            </p>
            <p>
                <span className={classes.title}>Last name:</span> {tenantsForm.lastName}
            </p>
            <p>
                <span className={classes.title}>Email:</span> {tenantsForm.email}
            </p>
            <p>
                <span className={classes.title}>Phone:</span> {tenantsForm.phone}
            </p>
            <p>
                <span className={classes.title}>Salary: </span> {tenantsForm.salary}
            </p>
        </div>
    );
};

export default Summary;
