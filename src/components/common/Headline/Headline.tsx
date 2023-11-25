import {PropsWithChildren} from "react";
import styles from './Headline.module.scss';
import cx from "classnames";

interface HeadlineProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

function Headline ({ level, className, children }: PropsWithChildren<HeadlineProps>) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cx(styles.title, styles[`h${level}`], className)}>
      {children}
    </Tag>
  )
}

export default Headline;
