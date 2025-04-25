import { Modal } from "antd";
import React, {
    useState,
    useImperativeHandle,
    useRef,
    ReactElement,
    ReactNode,
  } from "react";

  
  export type ModalProps = {
    children?: null | ReactElement | ReactElement[];
    width?: number | string | undefined;
    onCancel?: () => void;
    onOk?: () => void;
    title?: string | ReactNode
    loading?: boolean
  };
  
  export const useStandardModal = (r?: any) => {
    const ref: any = useRef(r);
    const open = () => ref.current?.setIsOpen(true);
    const close = () => ref.current?.setIsOpen(false);
  
    return [ref, open, close];
  };
  
  export const StandardModal = React.forwardRef((props: ModalProps, ref: any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const setOpen = (open: boolean) => setIsOpen(open);
  
    useImperativeHandle(ref, () => ({
      isOpen,
      setIsOpen,
    }));
  
    const handleClose = () => {
      setOpen(false);
      props.onCancel && props.onCancel();
    };
  
    const handleOk = () => {
      props.onOk && props.onOk();
    };
  
    if (!isOpen) return null;
  
    return (
        <Modal
        open={isOpen}
        onCancel={handleClose}
        title={props.title}
        onOk={handleOk}
        okButtonProps={{ loading: props.loading }}
        zIndex={1000}
    >
        {props.children}
    </Modal>
    );
  });
  