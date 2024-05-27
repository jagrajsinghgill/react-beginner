import { useRef, useState } from "react";

export function MyFormWithRefs() {
  const [formErrors, setFormErrors] = useState();
  const emailRef = useRef("");
  const passRef = useRef("");

  function validateForm() {
    let validForm = true;

    if (!emailRef?.current?.value) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          email: "Email is required",
        };
      });

      validForm = false;
    } else if (!emailRef?.current?.value.includes("@webdevsimplified.com")) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          email: "Email should inlcude @webdevsimplified.com",
        };
      });

      validForm = false;
    }

    if (!passRef?.current?.value) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password is required",
        };
      });

      validForm = false;
    } else if (passRef?.current?.value.length < 10) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should be 10 characters or longer",
        };
      });

      validForm = false;
    } else if (!/[a-z]/.test(passRef?.current?.value)) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should inlcude lower case letter.",
        };
      });

      validForm = false;
    } else if (!/[A-Z]/.test(passRef?.current?.value)) {
      setFormErrors((currFormErrors) => {
        return {
          ...currFormErrors,
          password: "Password should inlcude upper case letter.",
        };
      });

      validForm = false;
    } else if (!/[0-9]/.test(passRef?.current?.value)) {
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
          <input ref={emailRef} className="input" type="email" id="email" />
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
            ref={passRef}
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
