import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { resumeData } from "../../utils/resumeData";
import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const setShowDialog = (project) => {
    setProjectDialog(true);
    setDialogContent(project);
  };

  return (
    <Grid container className="section pb-3">
      {/* title */}
      <Grid item className="section-title mb-2">
        <span></span>
        <h6 className="section-title-text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          className="custom-tab"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            disableRipple
            label="All"
            value="All"
            className={
              tabValue === "All" ? `customTabs-item active` : `customTabs-item`
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.menu))].map(
            (menu, index) => (
              <Tab
                disableRipple
                key={index}
                label={menu}
                value={menu}
                className={
                  tabValue === menu
                    ? `customTabs-item active`
                    : `customTabs-item`
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project, index) => (
            <React.Fragment key={index}>
              {tabValue === project.menu || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom-card"
                      onClick={() => setShowDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom-card-img"
                          image={project.img_sm}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="custom-card-title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="custom-card-caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
      {/* Project Dialog */}
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="project-dialog"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {dialogContent?.title}
        </DialogTitle>
        <img
          src={dialogContent?.image}
          alt={dialogContent?.caption}
          className="project-dialog-image"
        />
        <DialogContent>
          <Typography
            component="p"
            variant="body2"
            className="dialog-description-tag"
          >
            <span className="bold">Related Tools: </span>

            {dialogContent?.tags?.map((tag, index) => (
              <span key={index}>
                {tag}
                {dialogContent?.tags?.length === index + 1 ? "." : ", "}
              </span>
            ))}
          </Typography>
          <Typography className="project-dialog-description">
            {dialogContent?.description}
          </Typography>
        </DialogContent>
        <DialogActions className="project-dialog-action">
          {dialogContent?.links?.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="project-dialog-icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
