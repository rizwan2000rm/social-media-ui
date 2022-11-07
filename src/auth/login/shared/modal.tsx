import Modal from "../../../shared/components/modal";
import LoginForm from "../form";

import { VoidHandler } from "../../../shared/types";

interface LoginModalProps {
  isVisible: boolean;
  isClosable: boolean;
  onClose: VoidHandler;
}

const LoginModal = ({ isVisible, isClosable, onClose }: LoginModalProps) => {
  if (!isVisible) {
    return <></>;
  }

  return (
    <Modal
      heading="Sign Up"
      subheading="Create an account to continue"
      className="w-full max-w-lg"
      isClosable={isClosable}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
