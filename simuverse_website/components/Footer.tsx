import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white mr-1">Simu</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mars-red to-mars-orange">Verse</span>
            </div>
            <p className="mt-3 text-sm text-gray-300 max-w-xs">
              A revolutionary multi-agent simulation environment creating the future of AI research and interaction.
            </p>
            <p className="mt-4 text-sm text-gray-300">
              Created by Roman Slack at The Rochester Institute of Technology
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="https://github.com/RomanSlack/SimuVerse-Test-Environment-V1" className="text-gray-300 hover:text-mars-orange transition-colors">
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mars-orange transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mars-orange transition-colors">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="https://www.rit.edu" className="text-gray-300 hover:text-mars-orange transition-colors">
                  The Rochester Institute of Technology
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mars-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@simuverse.ai" className="text-gray-300 hover:text-mars-orange transition-colors">
                  contact@simuverse.ai
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mars-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Rochester, NY, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-xs text-gray-400">
            &copy; {currentYear} SimuVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;