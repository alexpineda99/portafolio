import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Popup from "./Popup";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { SpinnerCircular } from "spinners-react";
import emailjs from "@emailjs/browser";
import "react-awesome-button/dist/styles.css";
import "react-form-input-fields/dist/index.css";
import "../Css/index.css";

function Contact() {
  let [msg, setmsg] = useState("");
  let [isSuccesful, setSuccesful] = useState(false);
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const sendemail = (data) => {
    setLoading(true);
    if (isSuccesful) {
      setSuccesful(false);
    }
    console.log(data);
    emailjs.send("service_0yyivyy", "template_cxq1iqj", data, "gejnPvSGcWeAzj5Ub")
      .then((res) => {
        setLoading(false);
        setSuccesful(true);
        console.log(res)
        reset();
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setmsg("Error in network");
        setLoading(false);
      });
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div id="contact" className="contact-div">
      <h1>Contact me!</h1>

      {loading ? (
        <div className="shader">
          <div className="loadingContainer">
            <SpinnerCircular
              size={80}
              thickness={100}
              speed={100}
              color="rgba(21, 193, 225, 1)"
              secondaryColor="rgba(255, 255, 255, 1)"
            />
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(sendemail)} className="contact-div-fields">
        <div className="contact-fields-row">
          <TextField
            type="text"
            variant="standard"
            size="medium"
            margin="normal"
            {...register("nombre", {
              required: {value: true, message: "Name field is required."},
              maxLength: {value: 30, message: "Name field must be at least 3 characters and no more than 30 characters"},
              minLength: {value: 3, message: "Name field must be at least 3 characters and no more than 30 characters"},
              pattern: {value: /^[a-zA-Z\s]*$/, message: "Only letters are valid in this field"},
            })}
            placeholder={"Enter first name"}
            helperText={errors.nombre && errors.nombre.message}
            error={errors.nombre && true}
          />
          <TextField
            type="email"
            variant="standard"
            size="medium"
            margin="normal"
            {...register("email", {
              required: {value: true, message: "Email field is required."},
              pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/, message: "Invalid email format"},
              maxLength: {value: 60, message: "Name field must be at least 3 characters and no more than 30 characters"},
              minLength: {value: 3, message: "Name field must be at least 3 characters and no more than 30 characters"}
            })}
            placeholder={"Enter email"}
            helperText={errors.email && errors.email.message}
            error={errors.email && true}
          />
        </div>
        <div className="contact-field">
          <TextField
            type="text"
            variant="standard"
            size="medium"
            margin="normal"
            {...register("subject", {
              required: {value: true, message: "Subject field is required."},
              pattern: {value: /^[a-zA-Z\s]*$/, message: "Only letters are valid in this field"},
              maxLength: {value: 60, message: "Name field must be at least 3 characters and no more than 60 characters"},
              minLength: {value: 3, message: "Name field must be at least 3 characters and no more than 30 characters"}
            })}
            placeholder={"Subject"}
            helperText={errors.subject && errors.subject.message}
            error={errors.subject && true}
          />

        </div>
        <h4>Purpose</h4>
        <div className="contact-textarea">
          <TextField
            {...register("body", {
              required: {value: true, message: "Body field is required."},
              pattern: {value: /^[a-zA-Z\s]*$/, message: "Only letters are valid in this field"},
              maxLength: {value: 120, message: "Name field must be at least 3 characters and no more than 60 characters"},
              minLength: {value: 3, message: "Name field must be at least 3 characters and no more than 30 characters"}
            })}
            multiline
            rows="10"
            cols="20"
            helperText={errors.body && errors.body.message}
            error={errors.body && true}
          ></TextField>
        </div>
        <div className="msg-div">
          {/* <span> {msg} </span> */}
          {isSuccesful ? <Popup /> : null}
        </div>
        <div className="send-button-form">
          <Button
            variant="contained"
            size="large"
            type="submit"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
