
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import hero1 from '../assets/istockphoto-1303107115-612x612.jpg'
import hero2 from '../assets/istockphoto-1498170916-612x612.jpg'
import hero3 from '../assets/istockphoto-1532565814-612x612.jpg'
import hero4 from '../assets/istockphoto-1533463575-612x612.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slider image={hero1} text="Be the change you want to see – your time and heart can make a world of difference." ></Slider></SwiperSlide>
        <SwiperSlide><Slider image={hero2} text="Together, we can lift communities and change lives – one act of kindness at a time."></Slider></SwiperSlide>
        <SwiperSlide><Slider image={hero3} text="Your hands can shape a brighter tomorrow – volunteer today and inspire hope."></Slider></SwiperSlide>
        <SwiperSlide><Slider image={hero4} text="Step up, reach out, and make an impact – because every effort counts in building a better world."></Slider></SwiperSlide>
    </Swiper>
    </>
  );
}