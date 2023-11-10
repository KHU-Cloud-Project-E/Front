import React from "react";
import styles from "../css/toggleSwitch.module.css"

const ToggleSwitch = ({isToggled, onClick}) => {
    return(
        <div className={`${styles.toggleSwitch} ${isToggled ? 'toggled' : ''}`} 
        onClick={onClick}>
            <div className={`${styles.slider} ${isToggled ? 'toggled' : ''}`} />
        </div>
    );
}

export default ToggleSwitch;