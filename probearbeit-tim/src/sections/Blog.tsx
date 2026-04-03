import Headline from '../components/Headline'
import type { HeadlineProps } from '../components/Headline'


const blogHeadline: HeadlineProps = {
  heading: 'Blog',
  lines:
    [
      'Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa.',
      'Odio pellentesque fusce elit facilisi risus blandit dictum turpis erat. A vestibulum sed scelerisque quis in.',
    ]
}


function Blog() {
  return (
    <>
      <Headline heading={blogHeadline.heading} lines={blogHeadline.lines} />
    </>
  )
}

export default Blog