import React from "react";
import styles from "../css/model.module.css";

const ModelComponent = ({modelid, description})=>{
    return(
        <div className={styles.model}>
            <b className={styles.modelText}>{description}</b>
            <div className={styles.modelImgBox}>
                <img className={styles.modelBtnImg} src="img/share.png"/>
                <img className={styles.modelBtnImg} src="img/refresh.png"/>
                <img className={styles.modelBtnImg} src="img/copy.png"/>
                <img className={styles.modelBtnImg} src="img/delete.png"/>
            </div>
        </div>
    );
}

export default ModelComponent