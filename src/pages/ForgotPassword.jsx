import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link has been sent to your email");
    } catch (error) {
      toast.error("Couldn't send reset link to your email");
    }
  };

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
            className='emailInput'
          />
          <Link to='/sign-in' className='forgotPasswordLink'>
            Sign In
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button type='submit' className='signInButton'>
              <ArrowRightIcon fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
