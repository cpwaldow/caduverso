import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/'>
          <a className={styles.link}>Home</a>
        </Link>

        <Link href='../euphemism'>
          <a className={styles.link}>Eufemismo</a>
        </Link>

        {/* <Link href='../news'>
          <a className={styles.link}>Notícias</a>
        </Link> */}

        <Link href='../gym'>
          <a className={styles.link}>Gym</a>
        </Link>
      </nav>
    </header>
  );
}
