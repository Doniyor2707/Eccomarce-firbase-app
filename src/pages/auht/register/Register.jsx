import { auth } from "../../../firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { useFormik } from "formik";

import styles from "../login/login.module.css";
import TitleH2 from "../../../components/ui/title/TitleH2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      const { email, password} = values;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userData) => {
          const user = userData.user;
          console.log(user);
          toast.success("Succesfully")
          navigate("/profile");
          resetForm();
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          toast.error(`${errMessage} ${errCode}`);
          console.log(errMessage);
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

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
