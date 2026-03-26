import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    site: { name: "Mosaic Holding Corporation", url: "https://mosaicholding.com" },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://mhc-backend-ten.vercel.app/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#000000",
            color: "#C5A363",
            border: "1px solid #C5A363",
          },
        });

        // Reset form
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <>
      <Toaster />

      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-100 backdrop-blur-lg border border-white/10 p-8 text-white"
        >
          <h2 className="heading mb-6 font-medium text-black">
            <SectionHeader firstWord="Get in Touch" />
          </h2>

          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2 paragraph">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-2 focus:ring-mainGold transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2 paragraph">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-2 focus:ring-mainGold transition-all"
            />
          </div>

          <div className="mb-8">
            <label className="block text-black text-sm font-bold mb-2 paragraph">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 text-black rounded-md bg-transparent border border-mainGold focus:outline-none focus:ring-2 focus:ring-mainGold transition-all resize-y"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn-boder-gold py-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

