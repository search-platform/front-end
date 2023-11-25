import Link from "next/link";
import styles from './Logo.module.scss';
import cx from "classnames";

interface LogoProps {
  className?: string;
}

function Logo ({ className }: LogoProps) {
  return (
    <Link href="/" className={cx(styles.logo, className)}>
      <strong className={styles.part1}>gera</strong>
      <strong className={styles.part2}>find</strong>
    </Link>
  );
}

export default Logo;
