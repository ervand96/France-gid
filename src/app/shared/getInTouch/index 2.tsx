"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const contactItems = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+33-609-57-27-80",
      sub: "Available 9:00 - 21:00",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "contact@eliteparisguide.com",
      sub: "Response within 24 hours",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "12 Rue de Rivoli, 75001 Paris",
      sub: "By appointment only",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "+33-609-57-27-80",
      sub: "Quick responses",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
        });
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#021538] text-white py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[80px] font-serif">Get In Touch</h2>
          <div className="w-[100px] h-[4px] bg-[#caa06b] mx-auto my-6" />
          <p className="text-[24px] text-gray-300">
            Ready to explore Paris? Contact us to plan your unforgettable
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT */}
          <div className="space-y-10">
            {contactItems.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-16 h-16 rounded-full bg-[#2d3443] flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-[42px] font-serif">{item.title}</h3>
                  <p className="text-[#d6a96f] text-[26px]">{item.value}</p>
                  <p className="text-gray-400 text-[22px]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bg-[#27344a] rounded-xl p-10">
            <h3 className="text-[54px] font-serif mb-8">Send a Message</h3>

            <form onSubmit={submitForm} className="space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-[72px] bg-[#3a4659] rounded-lg px-6"
                required
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full h-[72px] bg-[#3a4659] rounded-lg px-6"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full h-[72px] bg-[#3a4659] rounded-lg px-6"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your dream Paris experience..."
                rows={5}
                className="w-full bg-[#3a4659] rounded-lg px-6 py-4 resize-none"
                required
              />

              {/* hidden anti spam */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[72px] bg-[#d2a36d] text-black rounded-lg font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-green-400 mt-3">{success}</p>
              )}

              {error && (
                <p className="text-center text-red-400 mt-3">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
