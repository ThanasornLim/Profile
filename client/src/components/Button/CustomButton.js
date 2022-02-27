import { Button } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "0.8rem",
      },
    },
  },
});

const useStyle = makeStyles({
  btn: {
    fontSize: "0.8rem",
    fontWeight: 500,
    border: 0,
    borderRadius: "50px",
    padding: "1px 12px",
    lineHeight: "2rem",
    outline: "none",
    minWidth: "6.2rem",
  },
  btnIconContainer: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: "1.5rem",
    width: "1.5rem",
    lineHeight: "1.6rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: "0.8rem",
    textTransform: "none",
    textAlign: "center",
    width: "100%",
    marginLeft: "0.3rem",
    marginRight: "0.3rem",
  },
});

const CustomButton = ({
  text,
  icon,
  useTheme = true,
  disableBtn = false,
  onPress,
}) => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={useTheme ? theme : null}>
      <Button
        disabled={disableBtn}
        variant="contained"
        className={`${classes.btn}`}
        color="primary"
        onClick={onPress}
        endIcon={
          icon ? (
            <div className={`${classes.btnIconContainer}`}>{icon}</div>
          ) : null
        }
      >
        <span className={`${classes.btnText}`}>{text || "No text"}</span>
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
