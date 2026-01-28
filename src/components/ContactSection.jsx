'use client"';
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong ");
      }
    } catch {
      alert("Network error ");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-22 bg-slate-950 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Ready to start a project or looking for a developer? Let's build
            something impactful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ===== CONTACT FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur
                       rounded-xl p-8 shadow-lg shadow-blue-500/5"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* NAME */}
              <FloatingInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              {/* EMAIL */}
              <FloatingInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* MESSAGE */}
              <FloatingTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2
                           bg-gradient-to-r from-blue-500 to-cyan-500
                           hover:from-blue-600 hover:to-cyan-600
                           text-white font-medium py-3 rounded-lg
                           shadow-lg shadow-blue-500/30
                           transition-transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* ===== INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CONTACT INFO */}
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h4>

              <div className="space-y-4 text-gray-300 text-sm">
                <InfoRow
                  icon={<Mail size={18} />}
                  text="aashishmaurya959@gmail.com"
                />
                <InfoRow icon={<Phone size={18} />} text="+91 9919454692" />
                <InfoRow
                  icon={<MapPin size={18} />}
                  text="Uttar Pradesh, India"
                />
              </div>
            </div>

            {/* SOCIALS */}
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                <SocialIcon
                  href="https://github.com/Aashish595"
                  icon={<Github />}
                />
                <SocialIcon
                  href="https://www.linkedin.com/in/aashish959/"
                  icon={<Linkedin />}
                />
                <SocialIcon
                  href="https://www.instagram.com/aashish.maurya_/"
                  icon={<Instagram />}
                />
                <SocialIcon
                  href="mailto:aashishmaurya959@gmail.com"
                  icon={<Mail />}
                />
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="bg-white/5 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="inline-flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for new projects
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Usually responds within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= FLOATING INPUT ================= */

const FloatingInput = ({ label, name, type = "text", value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="peer w-full bg-transparent border border-white/20
                 rounded-lg px-4 pt-5 pb-2 text-white
                 focus:border-blue-400 focus:outline-none"
    />
    <label
      className="absolute left-4 top-3 text-gray-400 text-sm
                 peer-focus:top-1 peer-focus:text-xs
                 peer-focus:text-blue-400
                 peer-valid:top-1 peer-valid:text-xs
                 transition-all"
    >
      {label}
    </label>
  </div>
);

/* ================= FLOATING TEXTAREA ================= */

const FloatingTextarea = ({ label, name, value, onChange }) => (
  <div className="relative">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={4}
      className="peer w-full bg-transparent border border-white/20
                 rounded-lg px-4 pt-5 pb-2 text-white
                 focus:border-blue-400 focus:outline-none resize-none"
    />
    <label
      className="absolute left-4 top-3 text-gray-400 text-sm
                 peer-focus:top-1 peer-focus:text-xs
                 peer-focus:text-blue-400
                 peer-valid:top-1 peer-valid:text-xs
                 transition-all"
    >
      {label}
    </label>
  </div>
);

/* ================= HELPERS ================= */

const InfoRow = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <span className="text-blue-400">{icon}</span>
    <span>{text}</span>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-3 rounded-lg border border-white/10
               hover:border-blue-400/40
               hover:bg-blue-500/10
               transition transform hover:scale-110"
  >
    {icon}
  </a>
);
