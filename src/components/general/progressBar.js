import React from 'react';

const ProgressBar = props => {
    return(
        <div className="progressBar">
            <div className="beforePt bgGreen"></div>
            <div className={props.progress === "doing" || props.progress === "done" ? "middlePt bgGreen" : "middlePt"}></div>
            <div className={props.progress === "done" ? "afterPt bgGreen" : "afterPt"}></div>
            
            <div className={props.progress === "doing" || props.progress === "done" ? "line1 bgGreen" : "line1"}></div>
            <div className={props.progress === "done" ? "line2 bgGreen" : "line2"}></div>

        </div>
    );
}

export default ProgressBar;