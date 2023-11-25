import {PropsWithChildren} from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

interface ButtonProps {
  isIconButton?: boolean;
  isFullWidth?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  size?: 'small' | 'medium';
  className?: string;
  color?: 'purple' | 'red' | 'grey' | 'blue';
}

function Button ({ isOutlined, isFullWidth, onClick, color = 'purple', isDisabled, children, className, size = "medium", isIconButton }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cx(styles.button, styles[color], styles[size], {
        [styles.outlined]: isOutlined,
        [styles.fullWidth]: isFullWidth,
        [styles.disabled]: isDisabled,
        [styles.iconButton]: isIconButton,
      }, className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
