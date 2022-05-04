import React from "react";
import google from "../../../../images/social/google.png";
import github from "../../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.config";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  // Get react firebase hook for google popup login
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // Get react firebase hook for github popup login
  const [signInWithGithub, githubUser, githubloading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  // Get previous location
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Handle Error
  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  // Show spinner when loading
  if (googleLoading || githubloading) {
    return <Loading></Loading>;
  }
  // Redirect to previous page
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex theme_color">
        <hr style={{ width: "50%" }} />
        <p>or</p>
        <hr style={{ width: "50%" }} />
      </div>
      {errorElement}
      <div className=" d-flex justify-content-evenly ">
        <button
          onClick={() => signInWithGoogle()}
          type="submit"
          className="btn btn-outline-primary"
        >
          <img className="px-2" src={google} alt="" />
          Sign in with Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          type="submit"
          className="btn btn-outline-primary"
        >
          <img className="px-2" src={github} alt="" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
