import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from '../css/modelEdit.module.css';
import clipboardCopy from "clipboard-copy";
import { Tooltip } from "react-tooltip";
import ToggleSwitch from "../component/toggleSwitch";
import CrossElement from "../component/crossElement";
import GeneralButton from "../component/generalButton";
import OverlayWarning from "../component/overlay/overlayWarning";
import { useDropzone } from 'react-dropzone';

const baseUrl = import.meta.env.VITE_BACK_BASE_URL

const testJson = {
    "status": 200, // 상태
    "message": "success",
    "id": 4123, //모델의 아이디
    "description": "test1", //모델의 이름
    "share": false, //공유옵션 활성화 여부
    "ficture_src": null, //모델 사진 경로
    "detail": "this is test model" //모델에 대한 상세 설명
};

const warnTexts = [
    "모델을 공유함으로써 발생할 수 있는 모든 저작권에 대한 법적 책임은 본인에게 있음을 동의한다.",
    "본인이 업로드한 모델을 불특정 다수가 사용할 수 있음을 인지 했고, 이로인해 발생할 수 있는 모든 문제에 대한 책임은 본인에게 있음을 동의한다."
];

const warnlen = warnTexts.length;

const filledFalse = Array(warnlen).fill(false);

const WarnContent = ({ warnText, idx, checked, onChange }) => {
    return (
        <div className={styles.warnContent}>
            <div className={styles.warnContentTextBox}>
                <p>{warnText}</p>
            </div>
            <div className={styles.warnContentCkeckbox}>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => { onChange(idx) }}
                    />
                    <div className={styles.icon}>
                        {checked ? <MdCheckBox className={styles.iconChecked} /> : <MdCheckBoxOutlineBlank />}
                    </div>
                </label>
            </div>
        </div>
    );
}


function ModelEdit() {
    let modelId = useParams().id;
    const [components, setJsonData] = useState({});
    //api 불러오기 시작

    // 나중에 jwt key 설정 해 줘야함
    const config = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXcxMjEyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzAwOTI3OTY4LCJleHAiOjE3MDEyODc5Njh9.ECu6v3-g3dMOMVO3drUTilXnlVL8ghYH0iifvTdAf6A',
        },
        params: {
            'modelId': modelId
        }
    };

    const reqModels = (setJsonData) => {
        try {
            axios.get(baseUrl + '/users/models/detail', config).then(response => {
                setJsonData(response.data.result)
                console.log(response);
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        reqModels(setJsonData);
    }, []);

    // api 끝

    const description = components.name;
    const detail = components.description;

    const [isEditing, setIsEditing] = useState(false);
    const [isShare, setIsShare] = useState((components.model_check === 1) ? true : false);
    const [editName, setEditName] = useState(description);
    //이미지 설정 여부
    const [imgState, setImgState] = useState((components.image_url === null) ? false : true);
    //드로그 앤 드롭된 이미지를 저장하기 위한 state
    const [image, setImage] = useState(null);
    const [imgsrc, setImgsrc] = useState(components.image_url)
    //이미지 변경 여부
    const [imgchan, setImgchan] = useState(false);
    //디테일 데이터 저장
    const [editDetail, setEditDetail] = useState(detail);
    //공유 옵션 활성화에 대한 경고 오버레이
    const [overlayShare, setOverlayShare] = useState(false);
    //약관 동의 데이터를 저장
    const [warnChecked, setWarnChecked] = useState(filledFalse);
    //id refresh에 대한 경고 오버레이
    const [overlayId, setOverlayId] = useState(false);
    let navigate = useNavigate();
    // 전체 모델 list 페이지로 리다이렉트

    //로드 한 이후 화면을 한번 더 채워줌
    useEffect(() => {
        setEditName(description);
        setIsShare((components.model_check === 1) ? true : false);
        setImgState((components.image_url === null) ? false : true);
        setImgsrc(components.image_url);
        setEditDetail(detail);
    }, [components])

    const handleCopyToClipboard = () => {
        clipboardCopy(modelId);
        alert(`모델 id (${modelId})가 클립보드에 카피되었습니다.`);
    };

    const handleShareToggle = () => {
        if (isShare === true) { //공유 설정이 되어있을 때
            setIsShare(false);
        } else { //공유설정이 되어있지 않을 때
            setWarnChecked([...filledFalse])
            setOverlayShare(true);
            //setIsShare(true);
        }
    };

    //공유 경고 오버레이 취소
    const overlayShareCancel = () => {
        setOverlayShare(false);
    };

    //공유 경고 오버레이 확인
    const overlayShareConfirm = () => {
        let allSure = true;
        warnChecked.map(ch => {
            if (ch === false) {
                allSure = false;
            }
        })
        if (allSure) {
            setIsShare(true);
            setOverlayShare(false);
        }
        else {
            alert("모든 약관에 동의해 주세요.");
        }
    };

    //ID 재설정 경고 오버레이 설정
    const overlayIdCancel = () => {
        setOverlayId(false);
    };

    const overlayIdConfirm = () => {
        setOverlayId(false);
        const idConfig = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXcxMjEyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzAwOTI3OTY4LCJleHAiOjE3MDEyODc5Njh9.ECu6v3-g3dMOMVO3drUTilXnlVL8ghYH0iifvTdAf6A',
                'Content-Type': 'application/json',
            }
        };

        const dataConfig = {
            "modelId" : modelId
        };

        axios.put(baseUrl + '/users/models',dataConfig, idConfig).then(response => {
            console.log(response);
            alert("ID가 재할당 되었습니다.");
            navigate("/model")
        }).catch(error => {
            console.log(error);
        })
    };

    // 이미지 드래그 앤 드롭
    const onDrop = (acceptedFiles) => {
        const reader = new FileReader();
        const file = acceptedFiles;

        if (file) {
            reader.readAsDataURL(file[0]);
            setImage(file[0]);
            setImgState(true);
            setImgchan(true);
        }

        reader.onload = (e) => {
            setImgsrc(reader.result);
            console.log(imgsrc);
            document.getElementsByName("imageurl")[0].value = '';
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    //맨 밑의 저장 버튼
    const confirmButtonOnClick = async () => {
        const saveDataConfig = {
            "model_id": modelId,
            "name": editName,
            "description": editDetail,
            "share_check": isShare ? 1 : 0
        }
        const saveConfig = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXcxMjEyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzAwOTI3OTY4LCJleHAiOjE3MDEyODc5Njh9.ECu6v3-g3dMOMVO3drUTilXnlVL8ghYH0iifvTdAf6A',
                'Content-Type': 'application/json',
            }
        };
        const imgConfig = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXcxMjEyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzAwOTI3OTY4LCJleHAiOjE3MDEyODc5Njh9.ECu6v3-g3dMOMVO3drUTilXnlVL8ghYH0iifvTdAf6A',
                'Content-Type': 'multipart/form-data',
            }
        };
        console.log(saveConfig);
        try {
            const response = await axios.patch(baseUrl + '/users/models', saveDataConfig, saveConfig);
            //setJsonData(response.data.result)
            //console.log(response);
            if (imgchan === false) {
                alert("저장이 완료되었습니다.");
                navigate("/model");
            } else {
                const formData = new FormData();
                formData.append('file',image);
                formData.append('modelId',modelId);
                const responseImg = await axios.patch(baseUrl + '/users/models/image', formData, imgConfig);
                alert("저장이 완료되었습니다.");
                navigate("/model");
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
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
                                onChange={(e) => { setEditName(e.target.value) }}
                            />
                        </div>) :
                        (<div className={styles.modelNameBox}>
                            <p className={styles.modelNameFont}>{description}</p>
                            <div className={styles.modelImgBox}>
                                <button data-tooltip-id="nameedit-tooltip"
                                    data-tooltip-content="edit model name"
                                    onClick={(e) => { setIsEditing(true) }}>
                                    <img className={styles.modelBtnImg} src="/img/edit.png" />
                                    <Tooltip id="nameedit-tooltip" />
                                </button>
                            </div>
                        </div>)}
                    <hr className={styles.sepBlock} />
                    <div className={styles.modelIdBox}>
                        <div className={styles.modelIdInnerBox}>
                            <p className={styles.modelIdNameFont}>modelid : </p>
                            <p className={styles.modelIdFont}>{modelId}</p>
                            <button data-tooltip-id="copy-tooltip" data-tooltip-content="copy model id"
                                onClick={handleCopyToClipboard} >
                                <img className={styles.modelBtnImg} src="/img/copy.png" />
                                <Tooltip id="copy-tooltip" />
                            </button>
                        </div>
                        <div className={styles.modelImgBox}>
                            <button data-tooltip-id="refresh-tooltip"
                                data-tooltip-content="refresh model id"
                                data-tooltip-variant="warning"
                                onClick={() => { setOverlayId(true) }}>
                                <img className={styles.modelBtnImg} src="/img/refresh.png" />
                                <Tooltip id="refresh-tooltip" />
                            </button>
                        </div>
                    </div>
                    <hr className={styles.sepBlock} />
                    <div className={styles.modelIdBox}>
                        <div className={styles.modelIdInnerBox}>
                            <p className={styles.modelIdNameFont}>모델 공유 설정</p>
                        </div>
                        <div className={styles.modelImgBox}>
                            <ToggleSwitch isToggled={isShare} onClick={handleShareToggle} />
                        </div>
                    </div>
                    <div className={styles.modelShareBox}>
                        {/* <div className={styles.modelPictureBox}>
                            <div className={styles.modelPictureCross}>
                                <CrossElement />
                            </div>
                            <p className={styles.modelPictureText}>사진을 등록해 주세요</p>
                        </div> */}
                        {!imgState ? (
                            <div {...getRootProps()} className={styles.modelPictureBox}>
                                <div className={styles.modelPictureCross}>
                                    <CrossElement />
                                </div>
                                <p className={styles.modelPictureText}>사진을 등록해 주세요</p>
                                <input {...getInputProps()} multiple={false} name='imageurl' />
                            </div>
                        ) : (
                            <div {...getRootProps()} className={styles.modelPictureBox}>
                                <img src={imgsrc} />
                                <input {...getInputProps()} multiple={false} name='imageurl' />
                            </div>
                        )}
                        <div className={styles.modelDetailBox}>
                            <textarea
                                className={styles.modelDetailText}
                                value={editDetail}
                                placeholder="모델에 대한 자세한 설명을 적어주세요."
                                onChange={(e) => { setEditDetail(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className={styles.modelConfirmButtonBox}>
                        <GeneralButton text={"저장"} onClick={() => { confirmButtonOnClick() }} />
                    </div>
                </div>
            </div>
            <OverlayWarning isDisplay={overlayShare}
                clickCancle={overlayShareCancel}
                clickConfirm={overlayShareConfirm} >
                <div className={styles.warnContentBox}>
                    {warnTexts.map((wtext, idx) => (
                        <WarnContent warnText={wtext}
                            idx={idx}
                            checked={warnChecked[idx]}
                            onChange={(index) => {
                                setWarnChecked((prevWarn) => {
                                    const tempWarn = [...prevWarn];
                                    tempWarn[index] = !tempWarn[index];
                                    return [...tempWarn]
                                });
                            }}
                        />
                    ))}
                </div>
            </OverlayWarning>
            <OverlayWarning isDisplay={overlayId}
                clickCancle={overlayIdCancel}
                clickConfirm={overlayIdConfirm}>
                <div className={styles.warnIdBox}>
                    모델 id를 재발급 받으시게 되면 기존에 해당 모델을 등록하여 사용하고 계시던 모든 계정에서 해당 모델이 사용 불가능하게 되며 새롭게 발급받은 id로 재등록 해주셔야 합니다.
                </div>
            </OverlayWarning>
        </div>
    );

}

export default ModelEdit;