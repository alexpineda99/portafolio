import react, { useState } from "react";
import { FormField } from "react-form-input-fields";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-form-input-fields/dist/index.css";
import "../Css/index.css";

function Contact() {
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");

  return (
    <div className="contact-div">
        <h1>Contact to me!</h1>
      <div className="contact-div-fields">
          <form action="mailto:alexandropinedam1310@gmail.com" method="post" enctype="text/plain">
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
        <textarea rows="4" cols="50"></textarea>
        </div>
        <div className="send-button-form">
        <AwesomeButton type="primary">Send</AwesomeButton>
        </div>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;
