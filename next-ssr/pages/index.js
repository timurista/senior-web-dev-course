import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <ul>
      <li>
      <Link href="/about">
        <button>About</button>
      </Link>
      </li>
      <li>
        <Link href="/robots">
          <button>Robots</button>
        </Link>
      </li>
    </ul>
  </div>
)

export default Index;