import data from '@/consts/info';
import CardProject from './CardProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from '@/interfaces/data';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';

export default function SliderProjects() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect={'cube'}
      loop={true}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        shadowOffset: 0,
        shadowScale: 0,
        slideShadows: false,
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
