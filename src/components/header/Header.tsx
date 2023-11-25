import Logo from "../logo/Logo";
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export default Header;
