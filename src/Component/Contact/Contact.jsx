import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '685694b6-b6c1-4108-87fb-6e8f16e592f0');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      setResult('Something went wrong!');
    }
  };

  return (
    <section className="bg-[#f3f3f3] py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] grid md:grid-cols-2 overflow-hidden"
      >
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-indigo-700 text-white p-10 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-6 text-[16px] leading-relaxed">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt size={20} className="mt-1" />
                <p>Beside Barshal Water Tank,<br />Manpur, Barhanti,<br />West Bengal 723156</p>
              </div>
              <div className="flex items-center gap-4">
                <IoMdMail size={22} />
                <p>kkghosh0099@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt size={18} />
                <p>+91 9007062180</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-white text-xl mt-10">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer transition"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-10"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-8">Send a Message</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name" required className="w-full border-b border-gray-400 py-2 focus:outline-none" />
              <input type="text" name="lastName" placeholder="Last Name" required className="w-full border-b border-gray-400 py-2 focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" name="email" placeholder="Email Address" required className="w-full border-b border-gray-400 py-2 focus:outline-none" />
              <input type="tel" name="phone" placeholder="Mobile Number" required className="w-full border-b border-gray-400 py-2 focus:outline-none" />
            </div>
            <textarea name="message" rows="3" placeholder="Write your message here..." required className="w-full border-b border-gray-400 py-2 focus:outline-none" />
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-indigo-700 text-white font-semibold px-8 py-2 rounded-full shadow-md hover:bg-indigo-800 transition"
              >
                Send
              </motion.button>
              <p className="text-green-600 text-sm mt-2">{result}</p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
