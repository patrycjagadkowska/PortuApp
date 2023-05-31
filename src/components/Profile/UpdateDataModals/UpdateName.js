import { useRef } from "react";

import classes from './styles/UpdateInputs.module.css'

const UpdateName = (props) => {
    const { nameValue, setNameValue } = props;
    const nameCheckRef = useRef();
    const nameTextRef = useRef();

    const handleNameChecked = () => {
        if (nameCheckRef.current.checked) {
            nameTextRef.current.style.visibility = "visible";
            setNameValue({checked: true, value: nameTextRef.current.value});
        } else {
            nameTextRef.current.style.visibility = "hidden";
            setNameValue({checked: false, value: ""});
        }
    };

    const handleNameChange = () => {
        setNameValue({checked: true, value: nameTextRef.current.value});
    };

    return (
      <div className={classes["input-group"]}>
        <label>
          <input
            type="checkbox"
            name="name"
            ref={nameCheckRef}
            onChange={handleNameChecked}
          />{" "}
          Name
        </label>
        <input
          type="text"
          aria-label="new name"
          name="newName"
          ref={nameTextRef}
          style={{visibility: "hidden"}}
          onChange={handleNameChange}
          value={nameValue}
        />
      </div>
    );
};

export default UpdateName;