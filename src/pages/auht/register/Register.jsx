import { auth, provider, providerGit } from "../../../firbase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import * as Yup from "yup";
import { useFormik } from "formik";

import styles from "../login/login.module.css";
import TitleH2 from "../../../components/ui/title/TitleH2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Google from "../../../assets/images.png";
import GitHup from "../../../assets/25231.png";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth/web-extension";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Register = () => {
  // navigate

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          const user = userData.user;
          console.log(user);
          toast.success("Succesfully");
          navigate("/login");
          resetForm();
        })
        .catch((err) => {
          const errMessage = err.message;
          toast.error(`${errMessage}`);
          console.log(errMessage);
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log("User:", user);
        console.log("Token:", token);

        if (user && token) {
          navigate("/profile");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error("Error:", errorCode, errorMessage);
        console.error("User email:", email);
      });
  };

  let isSigningIn = false;

  const handleGitHubSignIn = () => {
    if (isSigningIn) return; // Agar sign-in jarayoni allaqachon davom etsa, funksiyani qayta chaqirmaslik

    isSigningIn = true; // Sign-in jarayoni boshlanmoqda

    signInWithPopup(auth, providerGit)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        isSigningIn = false; // Sign-in jarayoni tugadi
      });
  };
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <TitleH2 title={"Register"} />

      <div className={styles.formInp}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          className={styles.inp}
          placeholder="example@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={styles.err} style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        )}
      </div>

      <div className={styles.formInp}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className={styles.inp}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={styles.err} style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        )}
      </div>

      <div className={styles.formInp}>
        <label htmlFor="password" className={styles.label}>
          Password (Again)
        </label>
        <input
          type="password"
          name="confirmPassword"
          className={styles.inp}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className={styles.err} style={{ color: "red" }}>
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className={styles.btn}
      >
        {formik.isSubmitting ? "Continue..." : "Continue"}
      </button>

      <p className={styles.paragrf}>OR</p>

      <div className={styles.add}>
        <Link onClick={handleGoogleSignIn}>
          <img src={Google} alt="Google" width={30} />
        </Link>

        <Link onClick={handleGitHubSignIn}>
          <img src={GitHup} alt="Google" width={30} />
        </Link>
      </div>

      <div className={styles.user}>
        Already a member?
        <Link to={"/login"} className={styles.link}>
          Login
        </Link>
      </div>
    </form>
  );
};

export default Register;
