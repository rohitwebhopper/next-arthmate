// import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";
//
// import { useState } from "react";
import axios from "axios";
import Wrapper from "../../wrapper";
import classes from "./form.module.css";

// validation
const schema = yup.object().shape({
  name: yup
    .string()
    .default("")
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .max(100, "Name should be at most 100 characters")
    .required("Name is required"),
  email: yup
    .string()
    // .email("Please enter a valid email ID")
    .default("")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Please enter a valid email ID"
    )
    .required("Email is required"),
  mobile: yup
    .string()
    .default("")
    .test("is-10-digits", "Please enter a valid mobile number.", (value) => {
      if (!value) return false;
      return value.toString().length === 10;
    })
    .required("Mobile number is required"),
});

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      // Set isSubmitted to false after 10 seconds
      const timeoutId = setTimeout(() => {
        setIsSubmitted(false);
      }, 10000); // 10 seconds in milliseconds

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSubmitted]);

  const {
    control,
    reset,
    handleSubmit,
    // formState: { errors, isSubmitted },
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
    },
    resolver: yupResolver(schema),
  });

  const hasError = (fieldName: keyof typeof errors) => !!errors[fieldName];

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://backdev.arthmatedirect.com/support",
        {
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          subject: `Support From Website - ${data.name}`,
          message: `name=${data.name}, mobile=${data.mobile}, email=${data.email}`,
          from: "website",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;
      if (result.code === 200) {
        reset();
        setIsSubmitted(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper className="form">
      <div className={classes.containerfluid}>
        <div className={classes.container}>
          <div data-aos="fade-right">
            <div className={classes.formheading}>Partner with us</div>
          </div>

          <div className={classes.box}>
            <div className={classes.boximg}>
              {/* <img src={formimg} alt="404" /> */}
            </div>
            <div className={classes.boxform}>
              <div data-aos="fade-left">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={classes.formp}>
                    <p>
                      Want to know more about the benefits of partnering with
                      Arthmate Direct?
                    </p>
                  </div>
                  <div className={classes.formpp}>
                    <p>Share your details, and we'll get in touch with you.</p>
                  </div>
                  <div className={classes.forminput}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input {...field} placeholder="Name" />
                      )}
                    />
                    <hr
                      className={
                        hasError("name") ? classes.errors : classes.errr
                      }
                    />
                    <div className={classes.error}>
                      {errors.name && <p>{errors.name.message}</p>}
                    </div>
                  </div>
                  <div className={classes.forminput}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input {...field} placeholder="Email" />
                      )}
                    />
                    <hr
                      className={
                        hasError("email") ? classes.errors : classes.errr
                      }
                    />
                    <div className={classes.error}>
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className={classes.forminput}>
                    <Controller
                      name="mobile"
                      control={control}
                      render={({ field }) => (
                        <input {...field} placeholder="Mobile Number" />
                      )}
                    />
                    <hr
                      className={
                        hasError("mobile") ? classes.errors : classes.errr
                      }
                    />
                    <div className={classes.error}>
                      {errors.mobile && <p>{errors.mobile.message}</p>}
                    </div>
                  </div>
                  <div className={classes.btn}>
                    <button type="submit">Submit</button>
                  </div>
                  <div className={classes.successmessage}>
                    <span style={{ color: "green" }}>
                      {isSubmitted ? "Request has been sent." : null}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
