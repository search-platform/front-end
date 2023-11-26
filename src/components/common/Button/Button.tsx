import {PropsWithChildren} from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import IconLoader from "../icons/IconLoader";

interface ButtonProps {
  isLoading?: boolean;
  isIconButton?: boolean;
  isFullWidth?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  size?: 'small' | 'medium';
  className?: string;
  color?: 'purple' | 'red' | 'grey' | 'blue';
}

function Button ({ isOutlined, isLoading, isFullWidth, onClick, color = 'purple', isDisabled, children, className, size = "medium", isIconButton }: PropsWithChildren<ButtonProps>) {
  const handleOnClick = () => {
    if (isDisabled || isLoading) {
      return;
    }

    onClick();
  }

  return (
    <button
      className={cx(styles.button, styles[color], styles[size], {
        [styles.outlined]: isOutlined,
        [styles.fullWidth]: isFullWidth,
        [styles.disabled]: isDisabled,
        [styles.iconButton]: isIconButton,
        [styles.loading]: isLoading,
      }, className)}
      disabled={isDisabled}
      onClick={handleOnClick}
    >
      {isLoading ? (
        <div className={styles.loaderBox}>
          <IconLoader color={'#ffffff'} className={styles.loader} />
        </div>
      ) : null}
      <span className={styles.buttonLabel}>
        {children}
      </span>
    </button>
  );
}

export default Button;
