import Button from '../components/Button'

import HeroImage from '../assets/images/backgrounds/image-hero.png'


function Hero() {
  return (
    <div className='relative w-full flex flex-row justify-center'>
      <img src={HeroImage} alt='hero image' className='absolute inset-0 w-full h-180 md:h-210 md:p-6 object-cover' />

      <div className='relative w-89 md:w-152 h-180 md:h-222 flex flex-col justify-center items-center gap-6 text-center'>
        <div className='flex flex-col gap-2 text-white'>
          <h1 className='h1'>
            The start of a great adventure.
          </h1>
          <p className='hidden md:block h3'>
            Porta dui sed mattis odio cras integer sapien proin diam.
            Malesuada purus bibendum nulla libero ut etiam ut.
            Amet odio felis gravida porta accumsan arcu.
            Libero neque mi vestibulum habitant neque sagittis venenatis.
          </p>
        </div>
        <Button variant='primary' size='lg'>
          Read more
        </Button>
      </div>
    </div>
  )
}

export default Hero