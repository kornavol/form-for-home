import React, { FC, useState } from "react";

import clsx from "clsx";
import {
    ColorlibConnector,
    useColorlibStepIconStyles,
    useStyles,
    BackButton,
    FButton,
} from "./style";
import { Box, Step, Stepper, StepLabel, Button } from "@material-ui/core";

import ListAltIcon from "@material-ui/icons/ListAlt";
import EuroIcon from "@material-ui/icons/Euro";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import { useFormControls } from "../../components/tenantsForm/TenantsFormControls";
import Salary from "../../components/tenantsForm/Salary";
import ContactData from "../../components/tenantsForm/Contact";
import Summary from "../../components/tenantsForm/Summary";

interface ColorStepIcons {
    active: boolean;
    completed: boolean;
    error: boolean;
    icon: number;
}

function ColorlibStepIcon(props: ColorStepIcons) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: any = {
        1: <ListAltIcon />,
        2: <EuroIcon />,
        3: <PlaylistAddCheckIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

/* MAIN COMP. */
const Wizard: FC = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState<number>(0);

    const { values, errors, handleInputValue, handleFormSubmit, formIsValid } =
        useFormControls();

    const steps: string[] = ["Contact", "Salary", "Summary"];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const submitForm = () => {
        handleFormSubmit();
        handleNext();
    };

    const CurrentForm = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <div key={activeStep} data-aos="fade-in" data-aos-duration="1500">
                        <ContactData
                            values={values}
                            handleInputValue={handleInputValue}
                            errors={errors}
                        />
                    </div>
                );
            case 1:
                return (
                    <div key={activeStep} data-aos="fade-in" data-aos-duration="1500">
                        <Salary values={values} handleInputValue={handleInputValue} />
                    </div>
                );
            case 2:
                return (
                    <div key={activeStep} data-aos="fade-in" data-aos-duration="1500">
                        <Summary tenantsForm={values} />
                    </div>
                );
        }
    };

    return (
        <div
            id="tenant-wizzard"
            className={classes.root}
            data-aos="fade-in"
            data-aos-duration="1000"
        >
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector style={{ overflow: "hidden" }} />}
                style={{ width: "70%", position: "static" }}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <h2 className={classes.instructions}>
                        All steps completed - you&apos;re finished
                    </h2>
                    <Button onClick={handleReset} variant="contained" color="secondary">
                        Reset
                    </Button>
                </>
            ) : (
                <>
                    <div id="wizzard-body" className={classes.wBody}>
                        {CurrentForm(activeStep)}
                    </div>
                    <Box id="wiz-btns" display="flex" justifyContent="center">
                        {activeStep === 0 ? null : (
                            <BackButton onClick={handleBack}>Back</BackButton>
                        )}
                        <FButton
                            variant="contained"
                            disabled={!formIsValid()}
                            onClick={
                                activeStep === steps.length - 1 ? submitForm : handleNext
                            }
                        >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </FButton>
                    </Box>
                </>
            )}
        </div>
    );
};

export default Wizard;
