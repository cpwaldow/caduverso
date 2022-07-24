import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

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
      </nav>
    </header>
  );
}
