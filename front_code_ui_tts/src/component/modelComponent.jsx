import React from "react";
import styles from "../css/model.module.css";

const ModelComponent = ({modelid, description})=>{
    return(
        <div className={styles.model}>
            <b className={styles.modelText}>{description}</b>
        </div>
    );
}

export default ModelComponent