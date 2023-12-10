import { useSelector } from "react-redux";
import SignUp from "../../components/SignUp/SignUp";
import { isLoadingSelector } from "../../store/auth/authSelectors";
import Loader from "../../components/Loader/Loader";

const RegisterPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <>
      {isLoading && <Loader />}
      <SignUp />
    </>
  );
};

export default RegisterPage;
