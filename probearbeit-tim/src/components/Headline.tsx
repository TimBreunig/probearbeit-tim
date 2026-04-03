export type HeadlineProps = {
  heading: string,
  lines: string[],
}


function Headline({ heading, lines } : HeadlineProps) {
  return (
    <div className='container flex flex-col justify-center gap-4 pt-10 text-center'>
      <h2 className='h2 text-gray-900'>
        {heading}
      </h2>
      <p className='body-text text-gray-900'>
        {lines.map((line, i) => (
          <span key={i} className='block'>
            {line}
          </span>
        ))}
      </p>
    </div>
  )
}

export default Headline