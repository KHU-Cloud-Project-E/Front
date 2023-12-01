import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/model.module.css";
import clipboardCopy from "clipboard-copy";
import {Tooltip} from 'react-tooltip';

const ModelComponent = ({id, description, onClickDelete})=>{

    const handleCopyToClipboard = () => {
        clipboardCopy(id);
        alert(`모델 id (${id})가 클립보드에 카피되었습니다.`);
    }

    return(
        <div className={styles.model}>
            <b className={styles.modelText}>{description}</b>
            <div className={styles.modelImgBox}>
                <Link to={`/model/edit/${id}`} data-tooltip-id="edit-tooltip" data-tooltip-content="edit model config">
                    <img className={styles.modelBtnImg} src="img/edit.png"/>
                    <Tooltip id="edit-tooltip"/>
                </Link>
                <button data-tooltip-id="copy-tooltip" data-tooltip-content="copy model id" 
                onClick={handleCopyToClipboard} >
                    <img className={styles.modelBtnImg} src="img/copy.png"/>
                    <Tooltip id="copy-tooltip"/>
                </button>
                <button data-tooltip-id="delete-tooltip" data-tooltip-content="delete model"
                data-tooltip-variant="error"
                onClick={()=>{onClickDelete(id)}}>
                    <img className={styles.modelBtnImg} src="img/delete.png"/>
                    <Tooltip id="delete-tooltip"/>
                </button>
            </div>
        </div>
    );
}

export default ModelComponent