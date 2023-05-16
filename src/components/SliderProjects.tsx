import data from '@/consts/info';
import CardProject from './CardProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from '@/interfaces/data';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderProjects() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={'cube'}
      loop={true}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        slideShadows: true,
      }}
    >
      {data.projects.map((e: Project) => (
        <SwiperSlide key={e.id}>
          <CardProject project={e} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
