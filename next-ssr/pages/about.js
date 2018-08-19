import Link from 'next/link';

const About = () => (
  <div style={{ fontSize: '20px' }}>
    <h1>About</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
    <p>I was a magician once</p>
  </div>
)

export default About;