import Modal from "../../../shared/components/modal";
import LoginForm from "../form";

interface LoginModalProps {
  isClosable: boolean;
}

const LoginModal = ({ isClosable }: LoginModalProps) => {
  return (
    <Modal
      heading="Sign Up"
      subheading="Create an account to continue"
      className="w-full max-w-lg"
      isClosable={isClosable}
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
