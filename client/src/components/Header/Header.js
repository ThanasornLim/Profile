import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import {NavLink, withRouter } from "react-router-dom";
import {
  HomeRounded,
  // Telegram,
} from "@material-ui/icons";
// import { CustomButton } from "../";
import { resumeData } from "../../utils/resumeData";

import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header-nav container-shadow">
      {/* Home link */}
      <Nav.Link as={NavLink} to="/" className={'p-0 m-0'}>
        <Navbar.Brand className="header-home">
          <HomeRounded style={{color:"white"}}/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? `header-link-active` : `header-link`}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? `header-link-active` : `header-link`
            }
          >
            Portfolio
          </Nav.Link>
          {/* Contact me Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName === "/contact" ? `header-link-active` : `header-link`
            }
          >
            Contact me
          </Nav.Link>
        </Nav>
        <div className="header-right">
          {Object.keys(resumeData.socials).map((key, index) => (
            <a
              key={index}
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          {/* <CustomButton text="Hire me" icon={<Telegram color="primary" />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
