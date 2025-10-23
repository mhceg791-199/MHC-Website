import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 text-white"
      >
        <h2 className="heading-3 mb-6 text-mainGold">Get in Touch</h2>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-1 focus:ring-mainGold"
          />
        </div>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-1 focus:ring-mainGold"
          />
        </div>

        <div className="mb-8">
          <label className="block text-black text-sm font-bold mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 text-black rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-1 focus:ring-mainGold"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="py-2 px-3 bg-mainGold font-semibold rounded-md hover:bg-secondGold transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
