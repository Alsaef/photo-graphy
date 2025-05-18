import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjkwldon");
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
        <div className="max-w-md w-full bg-gray-950 border border-gray-800 rounded-2xl p-8 text-center shadow-lg text-white">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-300 mb-4">
            We've received your message and will be in touch shortly.
          </p>
          <p className="text-sm text-gray-500">
            If your inquiry is urgent, please use the phone number or email provided to contact us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" text-white py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
      {/* Left Side - Contact Info */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Getting Touch</h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Do you have a project <br /> in your mind?
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <FaPhoneAlt className="text-blue-500" />
          <p>+8801911167217</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <FaEnvelope className="text-blue-500" />
          <p>3mistudio22@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-500" />
          <p>Zinzira Keraniganj Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            required
            name='name'
            type="text"
            placeholder="Full Name*"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-3 w-full text-white focus:outline-none"
          />
          <input
            required
            name='email'
            type="email"
            placeholder="Email*"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-3 w-full text-white focus:outline-none"
          />
          <input
            required
            name='project'
            type="text"
            placeholder="Project Type*"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-3 w-full text-white focus:outline-none"
          />
          <input
            required
            name='mobile'
            type="tel"
            placeholder="Mobile*"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-3 w-full text-white focus:outline-none"
          />
        </div>
        <textarea
          required
          name="text-area"
          placeholder="Write Project Details*"
          rows="5"
          className="bg-transparent border border-gray-600 rounded-md px-4 py-3 w-full text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white px-6 py-3 rounded-md font-semibold"
        >
          Send Message →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
