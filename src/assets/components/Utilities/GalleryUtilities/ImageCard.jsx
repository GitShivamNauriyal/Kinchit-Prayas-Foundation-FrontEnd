import React from "react";
import "../../../css/GalleryCSS/gallery.css";
import galleryImage1 from "../../../../assets/images/GalleryImage/gal1.jpg";
import galleryImage2 from "../../../../assets/images/GalleryImage/gal2.jpg";
import galleryImage3 from "../../../../assets/images/GalleryImage/gal3.jpg";
import galleryImage4 from "../../../../assets/images/GalleryImage/gal4.jpg";
import galleryImage5 from "../../../../assets/images/GalleryImage/gal5.jpg";
import galleryImage6 from "../../../../assets/images/GalleryImage/gal6.jpg";
import galleryImage7 from "../../../../assets/images/GalleryImage/gal7.jpg";
import galleryImage8 from "../../../../assets/images/GalleryImage/gal8.jpg";
import galleryImage9 from "../../../../assets/images/GalleryImage/gal9.jpg";
import galleryImage10 from "../../../../assets/images/GalleryImage/gal10.jpg";
import galleryImage11 from "../../../../assets/images/GalleryImage/gal11.jpg";
import galleryImage13 from "../../../../assets/images/GalleryImage/gal13.jpg";
import galleryImage14 from "../../../../assets/images/GalleryImage/gal14.jpg";
import galleryImage15 from "../../../../assets/images/GalleryImage/gal15.jpg";
import galleryImage16 from "../../../../assets/images/GalleryImage/gal16.jpg";
import galleryImage17 from "../../../../assets/images/GalleryImage/gal17.jpg";
import galleryImage18 from "../../../../assets/images/GalleryImage/gal18.jpg";
import galleryImage19 from "../../../../assets/images/GalleryImage/gal19.jpg";
import galleryImage20 from "../../../../assets/images/GalleryImage/gal20.jpg";
import galleryImage21 from "../../../../assets/images/GalleryImage/gal21.jpg";
import galleryImage22 from "../../../../assets/images/GalleryImage/gal22.jpg";
import galleryImage23 from "../../../../assets/images/GalleryImage/gal23.jpg";
import galleryImage24 from "../../../../assets/images/GalleryImage/gal24.jpg";
import galleryImage25 from "../../../../assets/images/GalleryImage/gal25.jpg";
import galleryImage26 from "../../../../assets/images/GalleryImage/gal26.jpg";
import galleryImage27 from "../../../../assets/images/GalleryImage/gal27.jpg";
import galleryImage28 from "../../../../assets/images/GalleryImage/gal28.jpg";
import galleryImage29 from "../../../../assets/images/GalleryImage/gal29.jpg";
import galleryImage30 from "../../../../assets/images/GalleryImage/gal30.jpg";
import galleryImage31 from "../../../../assets/images/GalleryImage/gal31.jpg";
import galleryImage32 from "../../../../assets/images/GalleryImage/gal32.jpg";
import galleryImage33 from "../../../../assets/images/GalleryImage/gal33.jpg";
import galleryImage34 from "../../../../assets/images/GalleryImage/gal34.jpg";
import galleryImage35 from "../../../../assets/images/GalleryImage/gal35.jpg";
import galleryImage36 from "../../../../assets/images/GalleryImage/gal36.jpg";

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
					<img loading="lazy"
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
