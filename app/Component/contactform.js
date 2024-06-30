"use client"
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");  // Optional: To display the status of email sending

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_yn4sp8p";
        const templateId = "template_73022en";
        const publicKey = "yUICLvsHrH_5dUoXl";
        console.log(publicKey)

        if (!publicKey) {
            console.error("Public key is not set. Check your environment variables.");
            setStatus("Failed to send message. Public key is missing.");
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            t_name: "ashim",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                toast("message send",{
                    position: "top-right",
                    autoClose:1000,
                    hideProgressBar: false,
                    closeOnClick:true,
                    pauseOnHover:true,
                    draggable:true,
                    progress:undefined,
                    theme:"light",
                })
                setStatus("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Failed to send email", error);
                setStatus("Failed to send message. Please try again later.");
            });
    };

    return (
        
        <form onSubmit={handleSubmit} className="max-w-lg flex-1  bg-transparent  flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl flex font-bold mb-4">Contact </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                Send Message
            </button>
           
        </form>
    );
};

export default ContactForm;
