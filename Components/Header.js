import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>

        <Link href="../expression">
          <a className={styles.link}>Expressões</a>
        </Link>

        <Link href="../fundamentos">
          <a className={styles.link}>Fundamentos</a>
        </Link>

        <Link href="../pokemon">
          <a className={styles.link}>Pokemon Favorito</a>
        </Link>

        <Link href="../news">
          <a className={styles.link}>Notícias</a>
        </Link>
      </nav>
    </header>
  );
}
