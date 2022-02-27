import { Typography, Box } from "@material-ui/core";
import "./Profile.css";
import { CustomeTimeline, CustomerTimelineSeperator, CustomButton } from "../";
import { Person } from "@material-ui/icons";
import { resumeData } from "../../utils/resumeData";
import { TimelineItem, TimelineContent } from "@material-ui/lab";
import { grey } from "@material-ui/core/colors";
import { GetApp } from "@material-ui/icons/";

// ----------------  Timeline custom function  --------------------------------
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomerTimelineSeperator />
    <TimelineContent>
      {link ? (
        <Typography>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {title}:
          </span>
          <a
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              color: grey[600],
            }}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            &nbsp; {text}
          </a>
        </Typography>
      ) : (
        <Typography>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {title}:
          </span>
          &nbsp;
          <span style={{ fontSize: "0.8rem", color: grey[600] }}>{text}</span>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

// ----------------  Profile function  --------------------------------
const Profile = () => {
  const { name, title } = resumeData;
  
  return (
    <div className="profile container-shadow ">
      <div className="profile-name">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </div>

      <Box>
        <figure className="profile-image">
          <img src={resumeData.profile_img} alt="profile_img" />
        </figure>
      </Box>

      <div className="profile-info">
        <CustomeTimeline icon={<Person />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Role" text={resumeData.title} />
          <CustomTimelineItem title="BirthDay" text={resumeData.birthdate} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {/* {Object.keys(resumeData.socials).map((key, index) => (
            <CustomTimelineItem
              key={index}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))} */}
        </CustomeTimeline>
        <br />
        <div className="btn-container">
          <a
            href={resumeData.resume_download.link}
            download={resumeData.resume_download.name}
          >
            <CustomButton
              text="Download CV"
              icon={<GetApp color="primary" />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
