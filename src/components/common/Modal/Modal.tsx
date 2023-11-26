import * as RadixDialog from "@radix-ui/react-dialog";
import {PropsWithChildren, ReactNode, Ref, forwardRef} from "react";
import styles from './Modal.module.scss';
import cx from "classnames";
import Headline from "../Headline/Headline";
import IconClose from "../icons/IconClose";

export interface ModalProps {
  className?: string;
  title: string;
  text?: ReactNode;
  contentClassName?: string;
  buttons?: ReactNode[];
  onClose?: () => void;
}

export const ModalContent = forwardRef(function ModalContent (
  {
    className,
    contentClassName,
    title,
    text,
    buttons,
    onClose,
    children,
  }: PropsWithChildren<ModalProps>,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />

      <RadixDialog.Content
        className={cx(styles.container, className)}
        ref={forwardedRef}
      >
        <RadixDialog.Title className={cx(styles.titleContainer)}>
          {title}
        </RadixDialog.Title>

        <RadixDialog.Close aria-label="Close" className={styles.close} onClick={onClose}>
          <IconClose color="#000000" className={styles.closeIcon} />
        </RadixDialog.Close>

        <div className={cx(styles.content, contentClassName)}>
          {text ? (
            <RadixDialog.Description className={styles.text}>
              {text}
            </RadixDialog.Description>
          ) : null}
          {children ? <div className={styles.extraContent}>{children}</div> : null}
        </div>
        {buttons ? <div className={styles.buttons}>{buttons}</div> : null}
      </RadixDialog.Content>

    </RadixDialog.Portal>
  );
});

export const Modal = RadixDialog.Root;
export const ModalTrigger = RadixDialog.Trigger;
