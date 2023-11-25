import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../css/modelEdit.module.css';
import clipboardCopy from "clipboard-copy";
import { Tooltip } from "react-tooltip";
import ToggleSwitch from "../component/toggleSwitch";
import CrossElement from "../component/crossElement";
import GeneralButton from "../component/generalButton";
import OverlayWarning from "../component/overlay/overlayWarning";

const testJson = {
    "status": 200, // 상태
    "message": "success",
    "id": 4123, //모델의 아이디
    "description": "test1", //모델의 이름
    "share" : false, //공유옵션 활성화 여부
    "ficture_src" : "", //모델 사진 경로
    "detail" : "this is test model" //모델에 대한 상세 설명
};

const warnTexts = [
    "모델을 공유함으로써 발생할 수 있는 모든 저작권에 대한 법적 책임은 본인에게 있음을 동의한다.",
    "본인이 업로드한 모델을 불특정 다수가 사용할 수 있음을 인지 했고, 이로인해 발생할 수 있는 모든 문제에 대한 책임은 본인에게 있음을 동의한다."
];

const filledFalse = Array(warnTexts.length).fill(false);

const WarnContent = ({warnText}) => {
    return(
        <div className={styles.warnContent}>
            <div className={styles.warnContentTextBox}>
                <p>{warnText}</p>
            </div>
            <div className={styles.warnContentCkeckbox}>

            </div>
        </div>
    );
}


function ModelEdit(){
    let modelId = useParams().id;
    const description = testJson.description;
    const detail = testJson.detail;

    const [isEditing, setIsEditing] = useState(false);
    const [isShare, setIsShare] = useState(testJson.share);
    const [editName, setEditName] = useState(description);
    const [editDetail, setEditDetail] = useState(detail);
    const [overlayShare, setOverlayShare] = useState(false);
    const [warnChecked, setWarnChecked] = useState(filledFalse);

    const handleCopyToClipboard = () => {
        clipboardCopy(modelId);
        alert(`모델 id (${modelId})가 클립보드에 카피되었습니다.`);
    };

    const handleShareToggle = () => {
        if(isShare === true){ //공유 설정이 되어있을 때
            setIsShare(false);
        }else{ //공유설정이 되어있지 않을 때
            setOverlayShare(true);
            //setIsShare(true);
        }
    };

    const overlayShareCancel = () => {
        setOverlayShare(false);
    }

    const overlayShareConfirm = () => {
        setIsShare(true);
        setOverlayShare(false);
    }

    const confirmButtonOnClick = () => {
        
    };

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
                    <div className={styles.modelShareBox}>
                        <div className={styles.modelPictureBox}>
                            <div className={styles.modelPictureCross}>
                                <CrossElement />
                            </div>
                            <p className={styles.modelPictureText}>사진을 등록해 주세요</p>
                        </div>
                        <div className={styles.modelDetailBox}>
                            <textarea
                            className={styles.modelDetailText}
                            value={editDetail}
                            placeholder="모델에 대한 자세한 설명을 적어주세요."
                            onChange={(e)=>{setEditDetail(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className={styles.modelConfirmButtonBox}>
                        <GeneralButton text={"저장"} onClick={()=>{confirmButtonOnClick()}} />
                    </div>
                </div>
            </div>
            <OverlayWarning isDisplay={overlayShare}
            clickCancle={overlayShareCancel}
            clickConfirm={overlayShareConfirm} >
                <div className={styles.warnContentBox}>
                    {warnTexts.map(wtext => (
                        <WarnContent warnText={wtext}/>
                    ))}
                </div>
            </OverlayWarning>
        </div>
    );

}

export default ModelEdit;