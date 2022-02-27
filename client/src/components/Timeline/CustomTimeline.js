import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

// ----------------  Timeline custom theme ----------------
const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
        paddingLeft: "1rem",
      },
      root:{
        minHeight:"2.5rem",
      }
    },
    MuiTimelineConnector:{
      root:{
        // margin:"-5px 0"
      }
    },
    MuiTimelineContent:{
      root:{
        padding:"2px 2px 2px 2px"
      }
    }

  },
});

// ----------------  Timeline custom style  ----------------
const useStyle = makeStyles({
  root: {
    minHeight: 0,
  },
  timeline: {
    padding: 0,
    // marginTop:"-2rem"
  },
  firstItem: {
    minHeight: "80px",
  },
  timelineContentHeader: {
    fontWeight:"600",
    paddingTop: "0.4rem",
    paddingLeft:"1rem"
  },
  timelineContentBody: {
    paddingTop: 0,
    paddingBottom: "0.5rem",
  },
  timelineHeaderDot: {
    textAlign: "center",
    padding:"0.4rem"
  },
  timelineConnecter: {
    backgroundColor: grey[300],
  },
  timelineSeparatorPadding: {
    paddingLeft: "0.7rem",
  },
});


// ----------------  Timeline component  -----------------------
const CustomeTimeline = ({ title, children, icon }) => {
  // icon = <Work />;
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Timeline align="left" className={`${classes.timeline}`}>
        {/* Header Item */}
        <TimelineItem className={`${classes.firstItem}`}>
          <TimelineSeparator>
            <TimelineDot
              className={`${classes.timelineHeaderDot}`}
              color="primary"
            >
              {icon}
            </TimelineDot>
            <TimelineConnector className={`${classes.timelineConnecter}`} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              className={`${classes.timelineContentHeader}`}
            >
              {title} 
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Remainong Items */}
        {children}

      </Timeline>
    </ThemeProvider>
  );
};

export const CustomerTimelineSeperator = () => {
  const classes = useStyle();
  return (
    <TimelineSeparator className={`${classes.timelineSeparatorPadding}`}>
      <TimelineDot
        variant="outlined"
        color="primary"
      />
      <TimelineConnector className={`${classes.timelineConnecter}`} />
    </TimelineSeparator>
  );
};

export default CustomeTimeline;
