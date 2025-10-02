"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      emailjs
        .send(
          "S_vPar6ucni6xzWYq",
          "pmdc_auto_reply",
          formData,
        )
        .then(
          (result) => {
            console.log("Email successfully sent:", result);
            setSuccessMessage("Your message has been sent. Thank you!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              description: "",
              file: null,
            });
            e.target.reset(); // reset form fields
          },
          (error) => {
            console.error("Error sending email:", error);
            setErrorMessage("Something went wrong. Please try again.");
          }
        );
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="container form-container-overlap">
      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="col-lg-10">
          <div className="contact-form-wrapper">
            <h2 className="text-center mb-4">
              Worried About Who to Trust With Your Digital Future?
            </h2>
            <p className="lead text-center">
              We listen first, build second. No spam, no upsell &ndash; just a
              trusted team that treats your project like our own.
            </p>

            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-person"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name *"
                        required={true}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-envelope"></i>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email *"
                        required={true}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-telephone"></i>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Your Phone Number *"
                        required={true}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-building"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        placeholder="Company Name or Website"
                        required={false}
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-chat-dots message-icon"></i>
                      <textarea
                        className="form-control"
                        name="description"
                        placeholder="Describe Your Project *"
                        style={{ height: "180px" }}
                        required={true}
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="bi bi-paperclip"></i>
                      <input
                        type="file"
                        className="form-control"
                        name="file"
                        placeholder="Drag IMAGE, PDF or DOCX file here (optional)"
                        required={false}
                      />
                    </div>
                  </div>
                </div> */}

                <div className="col-12">
                  {loading && <div className="loading">Loading</div>}
                  {errorMessage && (
                    <div className="error-message">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  {successMessage && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary btn-submit">
                    Let’s Talk
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
