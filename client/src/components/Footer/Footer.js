import "./Footer.css";
import { Typography } from "@material-ui/core";

const Footer = ({ name }) => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">{name}</Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer-copyright">
          Developd by Thanasorn L. <br />
          Inspired idea from{" "}
          <a
            href="https://themeforest.net/user/tavonline"
            target="_blank"
            rel="noreferrer"
          >
            Travonline
          </a>
          
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
