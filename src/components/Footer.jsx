import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white italic">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Salendra</h2>
          <p className="mt-2 text-gray-400">Mern-Stack Developer</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/Salendra143" target='blank' className="hover:text-cyan-400">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/salendra-singh143/" target='blank' className="hover:text-cyan-400">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/yourusername" className="hover:text-cyan-400">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Salendra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
