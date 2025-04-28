'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const GithubPage = () => {
  const repositories = [
    {
      title: "SimuVerse Framework MK3",
      description: "The main SimuVerse testing environment with multi-agent AI simulation capabilities.",
      url: "https://github.com/RomanSlack/SimuVerse_Framework_MK3",
      icon: "/file.svg",
    },
    {
      title: "SimuVerse Unity Scripts & Environment",
      description: "Data collection and analysis tools for SimuVerse agent interactions and behaviors.",
      url: "https://github.com/RomanSlack/SimuExo1", // Update with actual URL when available
      icon: "/globe.svg",
    },
    {
      title: "SimuVerse Testing Sandbox",
      description: "The SimuVerse project website codebase built with Next.js and Tailwind CSS.",
      url: "https://github.com/RomanSlack/SimuVerse-Test-Environment-V1", // Update with actual URL when available
      icon: "/window.svg",
    },
    {
      title: "SimuVerse Memory & Subconscious Project",
      description: "Academic research papers and documentation related to the SimuVerse project and multi-agent AI environments.",
      url: "https://github.com/Forkei/Simu-Verse_Memory", // Update with actual URL when available
      icon: "/next.svg",
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#fcf8f5] to-[#f9f0e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-space-blue mb-6">
              SimuVerse GitHub Repositories
            </h1>
            <p className="text-[#718096] max-w-3xl mx-auto">
              Explore and contribute to the SimuVerse project through our open-source repositories.
              Join our community and help shape the future of multi-agent AI simulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {repositories.map((repo, index) => (
              <Link href={repo.url} key={index} target="_blank" rel="noopener noreferrer">
                <div className="card h-full flex flex-col hover:bg-gradient-to-br hover:from-white hover:to-[#fcf8f5] border border-transparent hover:border-mars-orange/20 transition-all duration-300">
                  <div className="mb-4 p-3 bg-space-blue/5 rounded-lg self-start">
                    <Image src={repo.icon} alt={repo.title} width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-space-blue mb-2">{repo.title}</h3>
                  <p className="text-[#718096] flex-grow">{repo.description}</p>
                  <div className="mt-6 flex items-center text-mars-red font-medium">
                    <span>View Repository</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default GithubPage;