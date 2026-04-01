import Button from '../components/Button'

import HighlightImage from '../assets/images/backgrounds/image-highlight.png'


function Highlight() {
  return (
    <div className='container relative py-10'>
      <div className='grid gap-y-0 rounded-lg overflow-hidden'>
        <div className='col-span-2 md:col-span-8 order-1 md:order-2 md:-ml-8 md:w-[calc(100%+32px)] '>
          <img
            src={HighlightImage}
            alt='highlight image'
            className='w-full aspect-video object-cover'
          />
        </div>
        <div className='col-span-2 md:col-span-4 order-2 md:order-1 flex flex-col gap-6 md:justify-between px-8 py-10 bg-product-f-blue-dark'>
          <div className='flex flex-col gap-4 text-white'>
            <h2 className='h2'>
              Enim nulla facilisis viverra lobortis
            </h2>
            <p className='body-text'>
              Lectus orci lectus in leo vel a.
              Venenatis sagittis nunc fermentum urna morbi.
              Sed luctus mi vulputate posuere quis.
              Amet dolor rhoncus tincidunt porta faucibus lorem in integer et.
            </p>
          </div>
          <div>
            <Button variant='primary' size='sm'>
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlight