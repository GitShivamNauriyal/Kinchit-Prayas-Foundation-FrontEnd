import React from "react";
import ImageCard from "./ImageCard";
import "../../../css/GalleryCSS/gallery.css";

const Gallery = () => {
	return (
		<div className="gallery-page-master">
			<div className="Gallery-banner">
				<h1>GALLERY</h1>
			</div>
			<div>
				<ImageCard />
			</div>
		</div>
	);
};

export default Gallery;
