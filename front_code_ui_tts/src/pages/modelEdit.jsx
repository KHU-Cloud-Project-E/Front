import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../css/modelEdit.module.css';
import clipboardCopy from "clipboard-copy";
import { Tooltip } from "react-tooltip";

const testJson = {
    "status": 200,
    "message": "success",
    "id": 4123,
    "description": "test1",
    "share" : false,
    "ficture_src" : "",
    "detail" : "this is test model"
  };


function ModelEdit(){
    let modelId = useParams().id;
    const description = testJson.description;

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(description);

    const handleCopyToClipboard = () => {
        clipboardCopy(modelId);
        alert(`모델 id (${modelId})가 클립보드에 카피되었습니다.`);
    }

    return(
        <div className={styles.modelBackground}>
            <div className={styles.models}>
                <b className={styles.modelsH}>
                    <h2>{description}</h2>
                </b>
                <div className={styles.editBox}>
                    {isEditing ? 
                    (<div className={styles.modelNameBox}>
                        <input 
                        className={`${styles.modelNameFont} ${styles.editing}`}
                        type="text"
                        value={editName}
                        onChange={(e) => {setEditName(e.target.value)}}
                        />
                    </div>) : 
                    (<div className={styles.modelNameBox}>
                        <p className={styles.modelNameFont}>{description}</p>
                        <div className={styles.modelImgBox}>
                            <button data-tooltip-id="nameedit-tooltip" 
                            data-tooltip-content="edit model name"  
                            onClick={(e) => {setIsEditing(true)}}>
                                <img className={styles.modelBtnImg} src="/img/edit.png"/>
                                <Tooltip id="nameedit-tooltip"/>
                            </button>
                        </div>
                    </div>)}
                    <hr className={styles.sepBlock}/>
                    <div className={styles.modelIdBox}>
                        <div className={styles.modelIdInnerBox}>
                            <p className={styles.modelIdNameFont}>modelid : </p>
                            <p className={styles.modelIdFont}>{modelId}</p>
                            <button data-tooltip-id="copy-tooltip" data-tooltip-content="copy model id" 
                            onClick={handleCopyToClipboard} >
                                <img className={styles.modelBtnImg} src="/img/copy.png"/>
                                <Tooltip id="copy-tooltip"/>
                            </button>
                        </div>
                        <div className={styles.modelImgBox}>
                        <button data-tooltip-id="refresh-tooltip" 
                                data-tooltip-content="refresh model id"  
                                data-tooltip-variant="warning"
                                onClick={(e) => {}}>
                                    <img className={styles.modelBtnImg} src="/img/refresh.png"/>
                                    <Tooltip id="refresh-tooltip"/>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModelEdit;