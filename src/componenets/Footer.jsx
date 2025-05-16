import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const links = [
  { href: 'https//discord.com', icon: <FaDiscord />},
  { href: 'htts://twitter.com', icon: <FaTwitter />},
  {href: 'https://github.com', icon: <FaGithub />},
  {href: 'https://twitch.com', icon: <FaTwitch />}
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-screen bg-[#71aa71] py-4 text-black">
      <div className="container mx-auto flex max-sm:flex-col items-center justify-between gap-4 px-4 md:flew-row">
        <p className="text-center text-sm md:text-left">
          @Nova <span id="date"></span>. All right resverved. <br /> By Nexus Design.</p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => {
            <a key={link} href={link.href} target='_blank' rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
              {link.icon}
            </a>
          })}
        </div>

        <a href="#privary-policy" className="text-center text-sm hover:underline md:text-right">Privary Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
