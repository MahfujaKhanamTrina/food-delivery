import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




import img1 from '../../../image/banner/banner_1.png';
import img3 from '../../../image/banner/banner_5.png';
import img4 from '../../../image/banner/banner_7.png';


const Banner = () => {
    return (
<div className="text-center">
  <Carousel>
    <div className="h-[500px] w-full overflow-hidden">
      <img src={img1} className="h-full w-full object-cover" alt="Description of img3" />
    </div>
    <div className="h-[500px] w-full overflow-hidden">
      <img src={img3} className="h-full w-full object-cover" alt="Description of img3" />
    </div>
    <div className="h-[500px] w-full overflow-hidden">
      <img src={img4} className="h-full w-full object-cover" alt="Description of img4" />
    </div>
  </Carousel>
</div>
    );
};

export default Banner;