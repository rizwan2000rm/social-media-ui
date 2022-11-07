import Modal from "../../../shared/components/modal";
import SignUpForm from "../form";

interface SignUpModalProps {
  isClosable: boolean;
}

const SignUpModal = ({ isClosable }: SignUpModalProps) => {
  return (
    <Modal
      heading="Sign Up"
      subheading="Create an account to continue"
      className="w-full max-w-lg"
      isClosable={isClosable}
    >
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
