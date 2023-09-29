import Image from 'next/image';
import styles from './boilerbox.module.css';
import DateYear from '../showYear/date';
import Link from 'next/link';

const BoilerBox = () => {
  return (
    <div className={styles.boilerbox}>
      <Image src={'/logo/m-logo-white.svg'} alt="M Logo" width={132} height={150} />
      <div>
        <h1>NextJS Template</h1>
        <p>Matias Bendtsen</p>
        <span>
          <Link href="/about">
            <DateYear />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BoilerBox;
