import Link from 'next/link';
import Image from '../components/image';

const About = () => (
  <div style={{ fontSize: '20px' }}>
    <h1>About</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
    <Image />
    <p>I was a magician once</p>
  </div>
)

export default About;