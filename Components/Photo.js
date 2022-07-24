import Image from 'next/image';
import styles from '../styles/Photo.module.css';

export default function Photo({ props }) {
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <Image src={props.image[props.name]} alt={props.name} loading="lazy" />
        <div className="container">
          <h2 className={styles.name}>{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
