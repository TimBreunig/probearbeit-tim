import type { LinkProps } from './Link'


export type FooterColProps = {
  heading: string
  hasParent?: boolean
  links?: LinkProps[]
  content?: React.ReactNode
}


function FooterCols({ heading, hasParent = false, links = [], content }: FooterColProps) {
  const hasLinks = links.length > 0

  const LinksList = hasLinks ? (
    <ul className='flex flex-col gap-2'>
      {links.map((link) => (
        <li key={link.link}>
          <a href={link.link}>{link.text}</a>
        </li>
      ))}
    </ul>
  ) : null

  return (
    <div className='col-span-3'>
      {hasParent ? (
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-6 body-text'>
            <span className='button'>{heading}</span>
            {LinksList}
          </div>
          {content && <div>{content}</div>}
        </div>
      ) : (
        <div className='flex flex-col gap-6 body-text'>
          <span className='button'>{heading}</span>
          {LinksList}
          {content && <div>{content}</div>}
        </div>
      )}
    </div>
  )
}

export default FooterCols