import React from "react";
import styles from "./css/Warning.module.css"
import GeneralButton from "../generalButton";

const OverlayWarning = ({children, clickCancle, clickConfirm, isDisplay}) => {
    const basicStyle = {
        "display" : isDisplay?"block":"none"
    };

    return (
        <div className={`${styles.overlaybackground} ${isDisplay?styles.warningon:styles.warningoff}`}>
            <div className={styles.fog}>
            </div>
            <div className={styles.warningbox}>
                <p className={styles.warningtitle}>주의!!!</p>
                <div className={styles.warningshowbox}>
                    <div className={styles.warningchildrenbox}>
                        {children}
                    </div>
                    <div className={styles.buttonbox}>
                        <GeneralButton text={"취소"} color={"#A3A3A3"} onClick={clickCancle}/>
                        <GeneralButton text={"확인"} onClick={clickConfirm}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}


export default OverlayWarning;