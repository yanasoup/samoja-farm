"use client";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitContactUsMessage } from "@/store/common-actions";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/ui-slice";

const ContactUs = () => {
  const dispatch = useDispatch();
  const inquirySendSuccess = useSelector(
    (state) => state.ui.inquirySendSuccess
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    randnum: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  useEffect(() => {
    dispatch(uiActions.setInquirySendSuccess(false));
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setFormData({ ...formData, randnum: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      return;
    }
    if (!recaptchaValue) {
      alert("Harap Ceklist CAPTCHA");
      return;
    }
    // Handle form submission with formData
    // console.log(formData, recaptchaValue);
    dispatch(submitContactUsMessage(formData));
  };

  if (inquirySendSuccess) {
    return (
      <div className="w-ful">
        <p className="text-xl mb-4 text-center">
          Pesan Anda berhasil dikirim. Kami akan berusaha merespon secepatnya.
          Terimakasih atas minat anda kepada{" "}
          <span className="text-xl text-amber-500">SamojaFarm</span>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-md">
        <h2 className="text-xl mb-4 text-center">Sampaikan Pesan Anda</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Nomor HP / Whatsapp / Telegram
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Pesan:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <ReCAPTCHA
              sitekey="6Le8ehoqAAAAAEXs4Qx8WOp9E8H2MN9IH8hOah6P"
              onChange={handleRecaptchaChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default ContactUs;
