import { useState } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        feedback: "",
        rating: 0, // Rating value
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (value) => {
        setFormData({ ...formData, rating: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.feedback && formData.rating > 0) {
            // Simulating form submission
            Swal.fire({
                title: "Thank you!",
                text: "Your feedback has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });

            // Clear form after submission
            setFormData({
                name: "",
                feedback: "",
                rating: 0,
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Please fill out all fields and provide a rating before submitting.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <SectionTitle
                heading={<span className="text-lg sm:text-xl md:text-2xl">Give Your Feedback</span>}
            />

            <form
                className="bg-white shadow-lg rounded-lg p-6 mt-6"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-lg mb-2"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="rating"
                        className="block text-lg mb-2"
                    >
                        Rating:
                    </label>
                    <Rating
                        style={{ maxWidth: 200 }}
                        value={formData.rating}
                        onChange={handleRatingChange}
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="feedback"
                        className="block text-lg mb-2"
                    >
                        Feedback:
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Write your feedback"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline border-0 border-b-4 bg-slate-200 border-yellow-500 mt-2 sm:mt-0"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default Contact;
