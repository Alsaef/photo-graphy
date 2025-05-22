import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaArrowAltCircleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://server-3mi-studio.vercel.app/api/v1/teams")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);



  const handleWhatsApp = (number) => {
    const phone = number.replace('+', '');
    const message = encodeURIComponent("Hi! I want to connect with you.");
    const url = ``;
    window.open(url, '_blank');
  };



  return (
    <section className=" text-white py-16 px-4 lg:my-14 my-5">
      <h2 className="text-4xl font-bold text-center mb-12">Our Creative Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="shadow-2xl rounded-2xl p-4 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover rounded-xl mb-4 bg-black backdrop-blur-lg hover:scale-105 duration-500"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-200 mb-1">{member.title}</p>
            {member.phone && <p className="text-sm text-gray-400">📞


              <a
                href={`https://wa.me/${member.phone.replace('+', '')}?text=${encodeURIComponent("Hi! I want to connect with you.")}`}
                target="_blank"

              >
                {member.phone}
              </a>

            </p>}
            {member.email && <p className="text-sm text-gray-400">✉️<a target="_blank" href={`https://mail.google.com/mail/?view=cm&to=${member.email}`}> {member.email}</a></p>}

            {/* Social Media */}
            <div className="flex justify-center gap-3 mt-3 text-white text-xl">
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noreferrer">
                  <FaFacebook className="hover:text-blue-400" />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram className="hover:text-pink-400" />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-blue-300" />
                </a>
              )}
              {member.youtube && (
                <a href={member.youtube} target="_blank" rel="noreferrer">
                  <FaYoutube className="hover:text-red-500" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter className="hover:text-sky-400" />
                </a>
              )}
              {member.fiverr && (
                <a href={member.fiverr} target="_blank" rel="noreferrer">
                  <svg
    className="text-white hover:text-green-400 transition-colors duration-200"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="-2.5 -2 24 24"
    preserveAspectRatio="xMinYMin"
    fill="currentColor"
  >
    <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"/>
    <circle cx="14.375" cy="1.875" r="1.875"/>
  </svg>


                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/*
 
<a
 href={`https://wa.me/${member.phone}?text=${encodeURIComponent("I'd like to chat with you")}`}
 target="_blank"
 rel="noopener noreferrer"
>
 {member.phone}
</a>

 
*/