import React from "react";
import styles from "../css/model.module.css";
import clipboardCopy from "clipboard-copy";

const ModelComponent = ({key, description})=>{

    const handleCopyToClipboard = () => {
        clipboardCopy(key);
        alert("모델 id가 클립보드에 카피되었습니다.");
    }

    return(
        <div className={styles.model}>
            <b className={styles.modelText}>{description}</b>
            <div className={styles.modelImgBox}>
                <button>
                    <img className={styles.modelBtnImg} src="img/share.png"/>
                </button>
                <button>
                    <img className={styles.modelBtnImg} src="img/refresh.png"/>
                </button>
                <button onClick={handleCopyToClipboard} >
                    <img className={styles.modelBtnImg} src="img/copy.png"/>
                </button>
                <button>
                    <img className={styles.modelBtnImg} src="img/delete.png"/>
                </button>
            </div>
        </div>
    );
}

export default ModelComponent