// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/clean_iraq.png',
          web:'https://clean-iraq-campaign.vercel.app/',
          git:'https://github.com/abdullah8kurjiya/clean_iraq_campaign',
          alt:"Clean_Irag_website"
        },
        {
          title: 'title',
          path: '/little.png',
          web:'https://littlelemon-restorant.netlify.app/',
          git:'https://github.com/abdullah8kurjiya/little-lemon',
          alt:"Little_lemon_website"
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/clean_iraq.png',
    //       web:'https://clean-iraq-campaign.vercel.app/',
    //     },
    //     {
    //       title: 'title',
    //       path: '/little.png',
    //       web:'https://clean-iraq-campaign.vercel.app/',
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] xl:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.alt} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#53B2D8] to-[#006B92] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='inset-y-10 sm:inset-y-20 lg:inset-y-36 absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <Link href={image.web}>
                          <div className='flex flex-wrap items-center gap-x-2 text-[13px] tracking-[0.2em] py-2'>
                            {/* title part 1 */}
                            <div className='delay-100 text-[8px] sm:text-sm'>LIVE</div>
                            {/* title part 2 */}
                            <div className='text-[8px] sm:text-sm translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className='text-[8px] sm:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                        <Link href={image.git}>
                          <div className='flex flex-wrap items-center gap-x-2 text-[13px] tracking-[0.2em] py-2'>
                            {/* title part 1 */}
                            <div className='delay-100 text-[8px] sm:text-sm'>GitHub</div>
                            {/* title part 2 */}
                            <div className='text-[8px] sm:text-sm translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className='text-[8px] sm:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
