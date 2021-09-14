import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import { StepConnector, Button } from "@material-ui/core";

export const ColorlibConnector = withStyles({
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0%)",
        },
    },
    alternativeLabel: {
        top: 22,
    },
    active: {
        "& $line": {
            backgroundColor: "#6d7f52",
            animation: "$fadeIn 0.5s linear forwards",
        },
    },
    completed: {
        "& $line": {
            backgroundColor: "#6d7f52",
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
    },
})(StepConnector);

export const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    "@keyframes active": {
        to: {
            backgroundColor: "#d1dfbe",
        },
    },
    "@keyframes completed": {
        to: {
            backgroundColor: "#6d7f52",
        },
    },
    active: {
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
        animation: "$active 1s linear forwards ",
    },
    completed: {
        animation: "$completed 1s linear forwards ",
    },
});

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "white",
        width: "70vw",
        maxWidth: "800px",
        minHeight: "70vh",

        marginTop: "3rem",
        marginBottom: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",

        boxShadow: "1px 1px 11px 2px rgba(0,0,0,0.44)",
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        fontFamily: "muli-semibold",
        color: "#6d7f52",
        textAlign: "center",
        padding: theme.spacing(1),
    },
    wBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
    },
}));

export const BackButton = withStyles((theme: Theme) => ({
    root: {
        marginRight: theme.spacing(3),
        background: "#e9e0cf",
        "&:hover": {
            backgroundColor: "#d0c9be",
        },
    },
}))(Button);

export const FButton = withStyles((theme: Theme) => ({
    root: {
        marginRight: theme.spacing(3),
        background: "#6d7f52",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#3a722c",
        },
    },
}))(Button);
