import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-12 px-6 md:px-20 mt-[110px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Column */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">3Mi Studio</h2>
          <p className="mb-6">Your Go-To Video Editing &amp; IT Solution Agency</p>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
              <FaLinkedin className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Our Portfolio</Link></li>
            <li><Link to="/about-us" className="hover:text-white">About</Link></li>
            <li><Link to="/contact-us" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Zinzira Keraniganj Dhaka, Bangladesh</p>
          <p className="mb-2">+8801911167217</p>
          <p><a href="mailto:3mistudio22@gmail.com">3mistudio22@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
