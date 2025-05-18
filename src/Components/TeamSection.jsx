import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);



  const handleWhatsApp = (number) => {
    const phone = number.replace('+', '');
    const message = encodeURIComponent("Hi! I want to connect with you.");
    const url = `https://wa.me/${phone}?text=${message}`;
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
              className="w-full h-72 object-cover rounded-xl mb-4 bg-[#015196] hover:scale-105 duration-500"
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
            {member.email && <p className="text-sm text-gray-400">✉️<a href={`mailto:${member.email}`}> {member.email}</a></p>}

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