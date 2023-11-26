import React, {useState} from "react";
import styles from '../css/model.module.css';
import ModelComponent from "../component/modelComponent";
import OverlayWarning from "../component/overlay/overlayWarning";

const testJson = {
    "status": 200,
    "message": "success",
    "count": 3,
    "components": [
      {
        "id" : 4123,
        "description" : "test1"
      },
      {
        "id" : 3142,
        "description" : "test2"
      },
      {
        "id" : 1643,
        "description" : "test3"
      }
    ]
  };


function Model(){
    const components = testJson.components;

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
      setWarningDelete(false);
    }


    return(
        <div className={styles.modelBackground}>
            <div className={styles.models}>
                <b className={styles.modelsH}>
                    <h2>모델 리스트</h2>
                </b>
                {components.map(component =>(
                    <ModelComponent id={component.id} description={component.description} onClickDelete={onClickDelete}/>
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