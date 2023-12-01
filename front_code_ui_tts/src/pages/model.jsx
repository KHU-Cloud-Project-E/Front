import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../css/model.module.css';
import ModelComponent from "../component/modelComponent";
import OverlayWarning from "../component/overlay/overlayWarning";

const baseUrl = import.meta.env.VITE_BACK_BASE_URL



function Model() {
  const token = localStorage.getItem('token')
  // 데이터 불러오기
  const [components, setJsonData] = useState([]);

  // 로그인으로 얻은 auth로 변경하는 코드 나중에 필요함.
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  };

  const reqModels = (setJsonData) => {
    try {
      axios.get(baseUrl + '/users/models', config).then(response => {
        setJsonData(response.data.result.listUserModelDetailDto)
        //console.log(response);
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    reqModels(setJsonData);
  }, []);

  //불러오기 끝

  //const components = testJson.components;

  const [deleteId, setDeleteId] = useState(0);
  const [warningDelete, setWarningDelete] = useState(false);

  const onClickDelete = (modelId) => {
    setDeleteId(modelId);
    setWarningDelete(true);
  }

  const onClickWarningCancel = () => {
    setWarningDelete(false)
  }

  const onClickWarningConfirm = () => {
    const idConfig = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      params: {
        "modelId": deleteId,
      }
    };

    const dataConfig = {
      "modelId": deleteId
    };

    axios.delete(baseUrl + '/users/models', idConfig).then(response => {
      console.log(response);
      alert("모델이 삭제되었습니다.");
      navigate("/model")
    }).catch(error => {
      console.log(error);
      alert("삭제에 실패하였습니다.");
      navigate("/model")
    })
    setWarningDelete(false);
  }


  return (
    <div className={styles.modelBackground}>
      <div className={styles.models}>
        <b className={styles.modelsH}>
          <h2>모델 리스트</h2>
        </b>
        {components.map(component => (
          <ModelComponent id={component.model_id} description={component.name} onClickDelete={onClickDelete} />
        ))}
      </div>
      <OverlayWarning
        clickCancle={onClickWarningCancel}
        clickConfirm={onClickWarningConfirm}
        isDisplay={warningDelete}>
        <div className={styles.warnIdBox}>
          모델을 삭제하시게 되면 즉시 해당 모델을 사용하실 수 없게 되며 영구히 삭제되어 복구할 수 없습니다. 동의하십니까?
        </div>
      </OverlayWarning>
    </div>
  );

}

export default Model;