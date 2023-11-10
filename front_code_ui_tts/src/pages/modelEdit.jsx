import React from "react";
import { useParams } from "react-router-dom";
import styles from '../css/modelEdit.module.css';

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
    const {modelId} = useParams();
    const description = testJson.description;
    return(
        <div className={styles.modelBackground}>
            <div className={styles.models}>
                <b className={styles.modelsH}>
                    <h2>{description}</h2>
                </b>
            </div>
        </div>
    );

}

export default ModelEdit;