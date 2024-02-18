import Hero from './hero/hero'
import AboutMe from './aboutme/aboutme'
import Masonry from './masonry/masonry'
import Blog from './blog/blog'
import Form from './form/form'
import Video from './videosection/video'
import Footer from './footer/footer'
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Masonry />
      <Video />
      <Form />
      <Footer />
    </main>
  )
}

