import { useState } from "react";

export function MyFormWithStates() {
  const [formErrors, setFormErrors] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    let validForm = true;

    if (!email) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          email: "Email is required",
        };
      });

      validForm = false;
    } else if (!email.includes("@webdevsimplified.com")) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          email: "Email should inlcude @webdevsimplified.com",
        };
      });

      validForm = false;
    }

    if (!password) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password is required",
        };
      });

      validForm = false;
    } else if (password.length < 10) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should be 10 characters or longer",
        };
      });

      validForm = false;
    } else if (!/[a-z]/.test(password)) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should inlcude lower case letter.",
        };
      });

      validForm = false;
    } else if (!/[A-Z]/.test(password)) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should inlcude upper case letter.",
        };
      });

      validForm = false;
    } else if (!/[0-9]/.test(password)) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should inlcude number.",
        };
      });

      validForm = false;
    }

    return validForm;
  }

  function handleSubmission(e) {
    e.preventDefault();
    setFormErrors();

    if (validateForm()) {
      alert("Success");
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmission}>
        <div className={formErrors?.email ? "form-group error" : "form-group"}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="email"
          />
          {formErrors?.email ? (
            <div className="msg">{formErrors?.email}</div>
          ) : (
            <></>
          )}
        </div>
        <div
          className={formErrors?.password ? "form-group error" : "form-group"}
        >
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
          {formErrors?.password ? (
            <div className="msg">{formErrors?.password}</div>
          ) : (
            <></>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
