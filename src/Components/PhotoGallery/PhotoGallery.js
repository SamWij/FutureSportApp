import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import galleryStyles from './gallery.module.css'
import image1 from '../../Assets/soccerImage1.png';
import image2 from '../../Assets/soccerImage2.png';
import image3 from '../../Assets/soccerImage3.png';
import image4 from '../../Assets/soccerImage4.png';

function PhotoGallery() {

  const images = [
    {
      id: "1",
      pic: image1,
      text: "soccer player 1"
    },
    {
      id: "2",
      pic: image2,
      text: "soccer player 2"
    },
    {
      id: "3",
      pic: image3,
      text: "soccer player 3"
    },
    {
      id: "4",
      pic: image4,
      text: "soccer player 4"
    }
  ];

  return (
    <div className={galleryStyles.column} >
      <Carousel className={galleryStyles.slides} autoPlay infiniteLoop centerMode showThumbs={false} interval={2000}>
        {images.map((image) => (
          <img key={image.id} src={image.pic} alt={image.text} className={galleryStyles.slideImage} />
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoGallery;
