import React from "react";
import "../../../../css/WorkDoneCss/Gallery.css";

const Gallery = (props) => {
    return (
        <div className="gallery-container">
            <div className="heading">
                <h2>A QUICK GLANCE</h2>
            </div>
            <div className="gallery">
                <div className="gallery-image-container  row1-col1-2">
                    <img
                        src={props.src1}
                        style={{ filter: props.filterImg1 }}
                    />
                </div>
                <div className="gallery-image-container row1-2-col3">
                    <img
                        src={props.src2}
                        style={{ filter: props.filterImg2 }}
                    />
                </div>
                <div className="gallery-image-container row2-3-col1">
                    <img
                        src={props.src3}
                        style={{ filter: props.filterImg3 }}
                    />
                </div>
                <div className="gallery-image-container row2-col2">
                    <img
                        src={props.src4}
                        style={{ filter: props.filterImg4 }}
                    />
                </div>
                <div className="gallery-image-container row3-col2-3">
                    <img
                        src={props.src5}
                        style={{ filter: props.filterImg5 }}
                    />
                </div>
                <div className="gallery-image-container  row4-col1-2-3">
                    <img
                        src={props.src6}
                        style={{ filter: props.filterImg6 }}
                    />
                </div>
                <div className="gallery-image-container row5-col1">
                    <img
                        src={props.src7}
                        style={{ filter: props.filterImg7 }}
                    />
                </div>
                <div className="gallery-image-container row5-col2">
                    <img
                        src={props.src8}
                        style={{ filter: props.filterImg8 }}
                    />
                </div>
                <div className="gallery-image-container row5-col3">
                    <img
                        src={props.src9}
                        style={{ filter: props.filterImg9 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
