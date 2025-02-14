import React from 'react';
import Logo from '../assets/images/logosaas.png';

const footerData = {
  categories: {
    Product: ["Features", "Examples", "Integrations", "Pricing"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Community", "Guides", "Updates", "Docs", "FAQ"],
    Legal: ["Privacy", "Terms", "Security", "Manifesto"],
  },
};

const Footer = () => {
  return (
    <section className="py-10 px-2.5 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col justify-between w-full md:w-[240px]">
          <div>
            <img src={Logo} alt="logo image" width={40} height={40} />
            <p className="tracking-tight mt-2.5">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </p>
          </div>
          <div>icon</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0">
          {Object.entries(footerData.categories).map(([category, links]) => (
            <div key={category}>
              <h2 className="font-bold mb-2">{category}</h2>
              {links.map((link) => (
                <div key={link} className="text-gray-400 hover:text-white">{link}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
