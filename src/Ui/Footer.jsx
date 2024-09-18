import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center p-5 text-black"
      style={{ backgroundImage: "url('/slide3.jpg')" }}
    >
      <div className="flex flex-wrap justify-around items-start">
        {/* Website Visitors Info */}
        <div className="flex-1 m-5">
          <p className="font-bold">Website Visitors:</p>
          <p>4382602</p>
          <p className="font-bold">Last Update:</p>
          <p>07 Jun 2024, 6:23PM</p>
          <button className="mt-2 px-4 py-2 bg-white border border-black cursor-pointer">
            Feedback
          </button>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-black text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-black text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-black text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-black text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* External Links */}
        <div className="flex-1 m-5">
          <h2 className="text-xl font-bold">External Links</h2>
          <ul className="list-none p-0">
            {[
              "National portal of India",
              "Rajasthan single window clearance system",
              "Janaadhaar",
              "Rajdharaa",
              "Chief Minister Office, Rajasthan",
              "Rajasthan Legislative Assembly",
              "Jansoochna Portal",
              "Webmyway",
              "Information and Public Relations Department",
              "Rajasthan Tourism",
            ].map((link) => (
              <li key={link} className="my-1">
                <a href="#" className="text-black">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nodal Officer Info */}
        <div className="flex-1 m-5">
          <h2 className="text-xl font-bold">Nodal Officer</h2>
          <p>Department of Information Technology & Communication</p>
          <p>oic[dot]website[at]rajasthan[dot]gov[dot]in</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
