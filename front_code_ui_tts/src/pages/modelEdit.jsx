import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../css/modelEdit.module.css';
import clipboardCopy from "clipboard-copy";
import { Tooltip } from "react-tooltip";
import ToggleSwitch from "../component/toggleSwitch";

const testJson = {
    "status": 200, // 상태
    "message": "success",
    "id": 4123, //모델의 아이디
    "description": "test1", //모델의 이름
    "share" : false, //공유옵션 활성화 여부
    "ficture_src" : "", //모델 사진 경로
    "detail" : "this is test model" //모델에 대한 상세 설명
  };


function ModelEdit(){
    let modelId = useParams().id;
    const description = testJson.description;

    const [isEditing, setIsEditing] = useState(false);
    const [isShare, setIsShare] = useState(testJson.share)
    const [editName, setEditName] = useState(description);

    const handleCopyToClipboard = () => {
        clipboardCopy(modelId);
        alert(`모델 id (${modelId})가 클립보드에 카피되었습니다.`);
    }

    const handleShareToggle = () => {
        if(isShare === true){ //공유 설정이 되어있을 때
            setIsShare(false);
        }else{ //공유설정이 되어있지 않을 때
            setIsShare(true);
        }
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
                    <hr className={styles.sepBlock}/>
                    <div className={styles.modelIdBox}>
                        <div className={styles.modelIdInnerBox}>
                            <p className={styles.modelIdNameFont}>모델 공유 설정</p>
                        </div>
                        <div className={styles.modelImgBox}>
                            <ToggleSwitch isToggled={isShare} onClick={handleShareToggle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModelEdit;