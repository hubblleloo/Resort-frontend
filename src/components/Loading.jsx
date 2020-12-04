import React from 'react';
import loadingGif from "../images/gif/loading-gear.gif"
function Loading(props) {
    return (
        <div className={"loading"}>
            <h4>Rooms data loading ...</h4>
            <img src={loadingGif} alt={"Loading data..."}/>
        </div>
    );
}

export default Loading;
