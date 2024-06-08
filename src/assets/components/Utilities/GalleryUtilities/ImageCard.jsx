import React from "react";
import "../../../css/GalleryCSS/gallery.css";
import galleryImage1 from "../../../../Image/GalleryImage/gal1.jpg";
import galleryImage2 from "../../../../Image/GalleryImage/gal2.jpg";
import galleryImage3 from "../../../../Image/GalleryImage/gal3.jpg";
import galleryImage4 from "../../../../Image/GalleryImage/gal4.jpg";
import galleryImage5 from "../../../../Image/GalleryImage/gal5.jpg";
import galleryImage6 from "../../../../Image/GalleryImage/gal6.jpg";
import galleryImage7 from "../../../../Image/GalleryImage/gal7.jpg";
import galleryImage8 from "../../../../Image/GalleryImage/gal8.jpg";
import galleryImage9 from "../../../../Image/GalleryImage/gal9.jpg";
import galleryImage10 from "../../../../Image/GalleryImage/gal10.jpg";
import galleryImage11 from "../../../../Image/GalleryImage/gal11.jpg";
import galleryImage13 from "../../../../Image/GalleryImage/gal13.jpg";
import galleryImage14 from "../../../../Image/GalleryImage/gal14.jpg";
import galleryImage15 from "../../../../Image/GalleryImage/gal15.jpg";
import galleryImage16 from "../../../../Image/GalleryImage/gal16.jpg";
import galleryImage17 from "../../../../Image/GalleryImage/gal17.jpg";
import galleryImage18 from "../../../../Image/GalleryImage/gal18.jpg";
import galleryImage19 from "../../../../Image/GalleryImage/gal19.jpg";
import galleryImage20 from "../../../../Image/GalleryImage/gal20.jpg";
import galleryImage21 from "../../../../Image/GalleryImage/gal21.jpg";
import galleryImage22 from "../../../../Image/GalleryImage/gal22.jpg";
import galleryImage23 from "../../../../Image/GalleryImage/gal23.jpg";
import galleryImage24 from "../../../../Image/GalleryImage/gal24.jpg";
import galleryImage25 from "../../../../Image/GalleryImage/gal25.jpg";
import galleryImage26 from "../../../../Image/GalleryImage/gal26.jpg";
import galleryImage27 from "../../../../Image/GalleryImage/gal27.jpg";
import galleryImage28 from "../../../../Image/GalleryImage/gal28.jpg";
import galleryImage29 from "../../../../Image/GalleryImage/gal29.jpg";
import galleryImage30 from "../../../../Image/GalleryImage/gal30.jpg";
import galleryImage31 from "../../../../Image/GalleryImage/gal31.jpg";
import galleryImage32 from "../../../../Image/GalleryImage/gal32.jpg";
import galleryImage33 from "../../../../Image/GalleryImage/gal33.jpg";
import galleryImage34 from "../../../../Image/GalleryImage/gal34.jpg";
import galleryImage35 from "../../../../Image/GalleryImage/gal35.jpg";
import galleryImage36 from "../../../../Image/GalleryImage/gal36.jpg";

const images = [
	{ key: 1, src: galleryImage1 },
	{ key: 2, src: galleryImage2 },
	{ key: 3, src: galleryImage3 },
	{ key: 4, src: galleryImage4 },
	{ key: 5, src: galleryImage5 },
	{ key: 6, src: galleryImage6 },
	{ key: 7, src: galleryImage7 },
	{ key: 8, src: galleryImage8 },
	{ key: 9, src: galleryImage9 },
	{ key: 10, src: galleryImage10 },
	{ key: 11, src: galleryImage11 },
	{ key: 13, src: galleryImage13 },
	{ key: 14, src: galleryImage14 },
	{ key: 15, src: galleryImage15 },
	{ key: 16, src: galleryImage16 },
	{ key: 17, src: galleryImage17 },
	{ key: 18, src: galleryImage18 },
	{ key: 19, src: galleryImage19 },
	{ key: 20, src: galleryImage20 },
	{ key: 21, src: galleryImage21 },
	{ key: 22, src: galleryImage22 },
	{ key: 23, src: galleryImage23 },
	{ key: 24, src: galleryImage24 },
	{ key: 25, src: galleryImage25 },
	{ key: 26, src: galleryImage26 },
	{ key: 27, src: galleryImage27 },
	{ key: 28, src: galleryImage28 },
	{ key: 29, src: galleryImage29 },
	{ key: 30, src: galleryImage30 },
	{ key: 31, src: galleryImage31 },
	{ key: 32, src: galleryImage32 },
	{ key: 33, src: galleryImage33 },
	{ key: 34, src: galleryImage34 },
	{ key: 35, src: galleryImage35 },
	{ key: 36, src: galleryImage36 },
];

const ImageCard = () => {
	return (
		<div className="Gallery-Container">
			{images.map((img) => (
				<div key={img.key} className="Gallery-image-Container">
					<img
						src={img.src}
						alt={`Gallery image ${img.key}`}
						className="Gallery-image"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageCard;
