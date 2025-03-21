import React, { useContext, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { careerModalContext } from "../../../context/CareerContext";
const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

function CareerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const inputFile = useRef(null);
  const { setOpen } = useContext(careerModalContext);
  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required("first name is required"),
    lastName: Yup.string().min(2).max(20).required("last name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be longer than 15 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
    cv: Yup.mixed()
      .required("A CV is required")
      .test(
        "fileSize",
        "File is too large. Maximum size is 5MB.",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "fileFormat",
        "Unsupported format. Please upload PDF, JPG, or PNG files.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      cv: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("hereeeee");

      setIsLoading(true);
      const formdata = new FormData();
      const { firstName, lastName, position, phone, email, message, cv } =
        values;
      console.log(values);

      formdata.append("firstName", firstName);
      formdata.append("lastName", lastName);
      formdata.append("phone", phone);
      formdata.append("email", email);
      formdata.append("message", message);
      formdata.append("cv", cv);
      formdata.append("websiteName", "MHC");

      const { data } = await axios.post(
        "https://wolsey.ca/api/candidate",
        formdata
      );
      toast.success("Application Sent Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);
      setOpen(false);
    },
  });

  return (
    <>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className="mb-5 ">
        <div className="grid gap-6 mb-3 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="bg-gray text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-gray-700"
              placeholder="First Name"
              required
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-800 text-sm mb-0">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="bg-gray text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-gray-700"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* phone input */}
        <div className="mb-3">
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="bg-gray text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-gray-700"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="bg-gray text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-gray-700"
            placeholder="Email"
            required
          />
        </div>

    

        {/* Message input */}
        <div className="mb-3">
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="bg-gray text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-mainGold focus:ring-mainGold focus:outline-none placeholder-gray-700"
            placeholder="Message"
            rows={6}
            required
          />
        </div>

        {/* File input */}
        <div className=" relative">
          <button
            onClick={() => inputFile.current.click()}
            className="absolute bg-gray-200 text-gray-800 px-3 text-sm h-full"
          >
            Attach CV
          </button>
          <input
            className="block w-full text-sm text-white cursor-pointer  bg-gray dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            name="cv"
            ref={inputFile}
            type="file"
            onChange={(event) => {
              formik.setFieldValue("cv", event.currentTarget.files[0]);
            }}
          />
        </div>

        <p
          className="mt-1 text-sm text-gray-100 dark:text-gray-300"
          id="file_input_help"
        >
          PDF (Max size: 5MB).
        </p>
        {isLoading ? (
          <button
            type="submit"
            className="text-white mx-auto flex bg-mainGold mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 rounded-2xl dark:focus:ring-blue-800"
          >
            Loading
          </button>
        ) : (
          <button
            type="submit"
            className="text-white mx-auto flex bg-mainGold mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 rounded-2xl dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
}

export default CareerForm;
