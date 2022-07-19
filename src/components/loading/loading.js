import React from "react";
import loading from "../../assets/loading/giphy-unscreen.gif";
import style from "./loading.module.scss";

const Loading = () => {
    return (
        <div className={style.bgLoading}>
        <img className="loadingProcess" src={loading} alt="loading" />
        </div>
    );
};

export default Loading;
