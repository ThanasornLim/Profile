import { Grid, Typography, Icon, Paper } from "@material-ui/core";
import { resumeData } from "../../utils/resumeData";
import { CustomeTimeline, CustomerTimelineSeperator } from "../../components";
import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";
import { Work, School } from "@material-ui/icons";
import { BsCheckAll } from "react-icons/bs";

import "./Resume.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
        paddingLeft: "19px",
      },
    },
    MuiTimelineConnector: {
      root: {
        // margin: "-4px",
      },
    },
    MuiTimelineContent: {
      root: {
        marginBottom: "-2rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "48px",
      },
    },
  },
});

const Resume = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* About me */}
        <Grid container className="section pb-3">
          <Grid item className="section-title mb-2">
            <span></span>
            <h6 className="section-title-text">About me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className="aboutme-text">
              {resumeData.about_me}
            </Typography>
          </Grid>
        </Grid>

        {/* Education & Experience*/}
        <Grid container className="section bg-gray pb-3">
          <Grid item className="section-title mb-2">
            <span></span>
            <h6 className="section-title-text">Work Experience & Education </h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              {/* Experiences */}
              <Grid item sm={12} md={6}>
                <CustomeTimeline  title="Work Experience" icon={<Work />} />
                {resumeData.experiences.map((exp, index) => (
                  <TimelineItem key={index}>
                    <CustomerTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline-title">
                        {exp.intern} &mdash; {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {exp.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">Department: </span>
                        {exp.department}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">Role: </span>
                        {exp.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">
                          Work Responsibilities{" "}
                        </span>{" "}
                        &ndash; {exp.resp_work}
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">
                          Responsibilities in project
                        </span>
                        {exp.resp_work_list.map((work, index) => (
                          <pre className="courses-list" key={index}>
                            <BsCheckAll className="courses-list-icon" />{" "}
                            <span>{work}</span>
                          </pre>
                        ))}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Grid>

              {/* Education */}
              <Grid item sm={12} md={6}>
                <CustomeTimeline title="Education History" icon={<School />} />
                {resumeData.education.map((edu, index) => (
                  <TimelineItem key={index}>
                    <CustomerTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline-title">
                        {edu.degree} &mdash; {edu.university}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {edu.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">Department: </span>
                        {edu.department}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">Cumulative GPA: </span>
                        {edu.gpa}
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="body2"
                        className="timeline-description"
                      >
                        <span className="courses-header">Relevant Courses</span>
                        {edu.courses.map((course, index) => (
                          <pre className="courses-list" key={index}>
                            <BsCheckAll className="courses-list-icon" />{" "}
                            <span>{course}</span>
                          </pre>
                        ))}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Services */}
        <Grid container className="section  pb-3">
          <Grid item className="section-title mb-2">
            <span></span>
            <h6 className="section-title-text">My Services</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3} justify="space-around">
              {resumeData.services.map((service, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <div className="service pb-3">
                    <Icon className="service-icon"> {service.icon}</Icon>
                    <Typography className="service-title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service-description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Skills */}
        <Grid container className="section bg-gray pb-3 ">
          <Grid item className="section-title mb-2">
            <span></span>
            <h6 className="section-title-text">Skills</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} justify="space-between">
              {resumeData.skills.map((skill, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" classnames="slill-title">
                      {skill.title}
                    </Typography>

                    {skill.description.map((element, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        className="skill-description"
                      >
                        <TimelineDot
                          variant="outlined"
                          className="timeline-dot"
                        />
                        {element}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Resume;
