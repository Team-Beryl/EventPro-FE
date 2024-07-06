

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import E from "../../../constants"
import { StarIcon } from '@heroicons/react/20/solid';




const Reviews = () => {
  return (


     
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          
          modules={[Autoplay, Pagination]}
         
        >
          {
            E.REVIEWS.map((review, index) => {
              return <SwiperSlide className="flex flex-col items-center justify-center pb-24 pt-10 gap-y-5" key={index}>

                <img className="w-40 border-solid overflow-hidden" src={review.img} alt="image" />
                <p className="font-bold pt-4">{review.name}</p>
                <p className="w-2/5">{review.description}</p>
                <div className='flex'>
                <StarIcon className='fill-yellow-400' width={20}/>
                <StarIcon className='fill-yellow-400' width={20}/>
                <StarIcon className='fill-yellow-400' width={20}/>
                <StarIcon className='fill-yellow-400' width={20}/>
                <StarIcon className='fill-yellow-400' width={20}/>
                </div>
              

              </SwiperSlide>
            })
          }

        </Swiper>
  
  
  )
}

export default Reviews
