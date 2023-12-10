import SignIn from "../../components/SignIn/SignIn";
import { isLoadingSelector } from "../../store/auth/authSelectors";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const LoginPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <>
      {isLoading && <Loader />}
      <SignIn />
    </>
  );
};

export default LoginPage;
