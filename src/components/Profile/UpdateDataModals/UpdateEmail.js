import { useRef } from "react";

import classes from './styles/UpdateInputs.module.css';

const UpdateEmail = (props) => {
    const { emailValue, setEmailValue } = props;
    const emailCheckRef = useRef();
    const emailTextRef = useRef();

    const handleEmailChecked = () => {
        if (emailCheckRef.current.checked) {
            emailTextRef.current.style.visibility = "visible";
            setEmailValue({checked: true, value: emailTextRef.current.value});
        } else {
            emailTextRef.current.style.visibility = "hidden";
            setEmailValue({checked: false, value: ""});
        }
    };

    const handleEmailChange = () => {
        setEmailValue({checked: true, value: emailTextRef.current.value});
    };

    return (
      <div className={classes["input-group"]}>
        <label>
          <input
            type="checkbox"
            name="email"
            ref={emailCheckRef}
            onChange={handleEmailChecked}
          />{" "}
          Email
        </label>
        <input
          type="text"
          aria-label="new email"
          name="newEmail"
          ref={emailTextRef}
          style={{ visibility: "hidden" }}
          onChange={handleEmailChange}
          value={emailValue}
        />
      </div>
    );
};

export default UpdateEmail;