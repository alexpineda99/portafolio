import react, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Popup from "./Popup";
import { FormField } from "react-form-input-fields";
import { AwesomeButton } from "react-awesome-button";
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios';
import "react-awesome-button/dist/styles.css";
import "react-form-input-fields/dist/index.css";
import "../Css/index.css";

function Contact() {
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [body, setBody] = useState("");
  let [msg, setmsg] = useState("");
  let [isSuccesful, setSuccesful] = useState(false);
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = event => {
    setBody(event.target.value);
  };

  //
  const sendemail = () => {
    setSuccesful(false);
    setLoading(true);
    let regLetter = /^[a-zA-Z\s]*$/; // regular expression only letters
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/; // regular expression email


    const data = {
      nombre: nombre,
      email: email,
      subject: subject,
      body: body
    }

    if (nombre.length === 0) {
      setmsg("Name field required");
      setLoading(false);
    }
    else if (!regLetter.test(nombre)) {
      setmsg("Name field requires only letters");
      setLoading(false);
    }
    else if (email.length === 0) {
      setmsg("Email field required");
      setLoading(false);
    }
    else if (!regEmail.test(email)) {
      setmsg("Please enter a valid email address");
      setLoading(false);
    }
    else if (subject.length === 0) {
      setmsg("Subject field requires only letters");
      setLoading(false);
    }
    else if (!regLetter.test(subject)) {
      setmsg("Subject field requires only letters");
      setLoading(false);
    }
    else {
      // https://serverportafolio.cleverapps.io/sendemail
      axios.post("http://localhost:3001/sendemail", data)

        .then(res => {
          console.log(res.data)
          setNombre("");
          setEmail("");
          setSubject("");
          setBody("");
          setmsg("");
          setLoading(false);
          setSuccesful(true);
          navigate("/");
          
        })
        .catch(err => {
          console.log(err);
          setmsg("Error in network")
          setLoading(false);
        })
    }
  }
  //

  // useEffect(() => {



  // }, [])

  return (
    <div id="contact" className="contact-div">
      <h1>Contact me!</h1>

      {loading ?

        <div className="shader">
          <div className="loadingContainer">
            <SpinnerCircular size={80} thickness={100} speed={100} color="rgba(21, 193, 225, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
          </div>
        </div>

        : null}

      <div className="contact-div-fields">


        <div className="contact-fields-row">

          <FormField
            type="text"
            standard="labeleffect"
            value={nombre}
            keys={"nombre"}
            effect={"effect_1"}
            handleOnChange={(value) => setNombre(value)}
            placeholder={"Enter first name"}
          />
          <FormField
            type="email"
            standard="labeleffect"
            value={email}
            keys={"email"}
            effect={"effect_1"}
            handleOnChange={(value) => setEmail(value)}
            placeholder={"Enter email"}
          />

        </div>
        <div className="contact-field">
          <FormField
            type="text"
            standard="labeleffect"
            value={subject}
            keys={"subject"}
            effect={"effect_1"}
            handleOnChange={(value) => setSubject(value)}
            placeholder={"Subject"}
          />
        </div>
        <h4>Purpose</h4>
        <div className="contact-textarea">
          <textarea value={body} onChange={onChangeHandler} rows="10" cols="20"></textarea>
        </div>
        <div className="msg-div">
          <span> {msg} </span>
          {isSuccesful ? <Popup /> : null}
        </div>
        <div className="send-button-form">
          <AwesomeButton onPress={() => sendemail()} type="primary" >Send</AwesomeButton>
        </div>
      </div>

    </div>
  );
}

export default Contact;
