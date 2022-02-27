import { Grid, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { resumeData } from "../../utils/resumeData";
import { CustomButton } from "../../components";
import "./Contactme.css";
import React, { useState, useEffect } from "react";
import { formSent } from "../../api";

const useStyle = makeStyles({
  errorColor: {
    color: "red",
  },
});

const Contactme = () => {
  const classes = useStyle();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [submitResponse, setSubmitResponse] = useState({
    status: false,
    message: "Message sent.",
  });
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [isWrongEmail, setIsWrongEmail] = useState(false);

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    setName("");
    setDisableBtn(false);
    setTimeout(() => {
      setSubmitResponse(false);
    }, 3000);
  };

  const checkEmail = (email) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    )
      return setIsWrongEmail(true);
    setIsWrongEmail(false);
  };

  // submit handler function
  const submitHandler = async () => {
    if (disableBtn) return;
    if (isWrongEmail) return;
    if (
      [
        subject.trim().length,
        name.trim().length,
        email.trim().length,
        message.trim().length,
      ].includes(0)
    ) {
      setSubmitResponse(false);
      setIsFormEmpty(true);
      return;
    }
    setDisableBtn(true);
    setIsFormEmpty(false);

    const res = await formSent({ name, subject, email, message });
    if (res) {
      if (res.status !== 200 || !res.data.taskSuccess) {
        return setSubmitResponse({
          status: true,
          message: "Fail to send message.",
        });
      }

      resetForm();
      setSubmitResponse({
        status: true,
        message: "Message sent.",
      });
    }
  };

  useEffect(() => {
    setIsFormEmpty(false);
  }, []);

  return (
    <>
      <Grid container>
        {/* Contact form */}
        <Grid item>
          <Grid container className="section pb-3" spacing={10}>
            <Grid item xs={12} lg={6}>
              <Grid container>
                <Grid item>
                  <Grid item className="section-title mb-2">
                    <span></span>
                    <h6 className="section-title-text">Contact Form</h6>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="E-mail"
                        InputProps={
                          isWrongEmail ? { className: classes.errorColor } : {}
                        }
                        onChange={(e) => {
                          setEmail(e.target.value);
                          checkEmail(e.target.value);
                        }}
                        value={email}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="subject"
                        label="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                      <CustomButton
                        onPress={submitHandler}
                        disableBtn={disableBtn}
                        text={`${disableBtn ? "Sending..." : "Submit"}`}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="subtitle1" component={"span"}>
                        {isFormEmpty ? "Please complete the form." : ""}
                        {submitResponse.status ? submitResponse.message : ""}
                        {isWrongEmail ? "Incorrect email address." : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Contact information */}
            <Grid item xs={12} lg={6}>
              <Grid container>
                <Grid item>
                  <Grid item className="section-title mb-2">
                    <span></span>
                    <h6 className="section-title-text">Contact Information</h6>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography className="contact-info-item">
                        <span>Address: </span>
                        {resumeData.address}
                        {resumeData.postalNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="contact-info-item">
                        <span>Facebook: </span>
                        <a
                          href={resumeData.socials.Facebook.link}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-info-item-link"
                        >
                          {resumeData.socials.Facebook.textFull}
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="contact-info-item">
                        <span>Linkedin: </span>

                        <a
                          href={resumeData.socials.Linkedin.link}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-info-item-link"
                        >
                          {resumeData.socials.Linkedin.textFull}
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="contact-info-item">
                        <span>Email: </span>
                        {resumeData.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container className="contact-info-social-container">
                  {Object.keys(resumeData.socials).map((key) => (
                    <Grid item key={key} className="contact-info-social-icon">
                      <a
                        href={resumeData.socials[key].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {resumeData.socials[key].icon}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contactme;
