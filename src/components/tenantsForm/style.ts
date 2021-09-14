import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import { Styles } from "@material-ui/styles";

import { Radio } from "@material-ui/core";

/* Contact.tsx */
export const styles: Styles<Theme, {}, string> = (theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
});

/* Salary.tsx */
export const SalaryStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontFamily: "muli-semibold",
    fontSize: "20px",
    color: "#6d7f52",
    textAlign: "center",
  },
}));

export const GreenRadio = withStyles({
  root: {
    color: "#6d7f52",
    "&$checked": {
      color: "#3a722c",
    },
  },
  checked: {},
})(Radio);

/* Summary.tsx  */
export const SummaryStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontFamily: "muli-semibold",
    fontSize: "20px",
    color: "#6d7f52",
    textAlign: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontWeight: 600,
    marginRight: "5px",
  },
}));
