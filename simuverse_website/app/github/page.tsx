'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const GithubPage = () => {
  const repositories = [
    {
      title: "SimuVerse Framework MK3",
      description: "Core framework for SimuVerse with LLM integration, agent management, and simulation orchestration capabilities.",
      url: "https://github.com/RomanSlack/SimuVerse_Framework_MK3",
      icon: "/file.svg",
      creator: "Roman Slack"
    },
    {
      title: "SimuVerse Unity Scripts & Environment",
      description: "3D simulation environment built with Unity, including terrain generation, agent movement, and environmental interactions.",
      url: "https://github.com/RomanSlack/SimuExo1",
      icon: "/globe.svg",
      creator: "Roman Slack"
    },
    {
      title: "SimuVerse Testing Sandbox",
      description: "Development sandbox for testing agent behaviors, interactions, and environment response in controlled scenarios.",
      url: "https://github.com/RomanSlack/SimuVerse-Test-Environment-V1",
      icon: "/window.svg",
      creator: "Chris DeForest"
    },
    {
      title: "SimuVerse Memory & Subconscious Project",
      description: "Implementation of persistent memory and subconscious processing for agents, enabling long-term learning and context retention.",
      url: "https://github.com/Forkei/Simu-Verse_Memory",
      icon: "/next.svg",
      creator: "Joshua Hermann & Olivier Couthaud"
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
                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>}
                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>}
                    {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>}
                  </div>
                  <h3 className="text-xl font-semibold text-space-blue mb-2">{repo.title}</h3>
                  <p className="text-[#718096] mb-2">{repo.description}</p>
                  <div className="bg-gray-100 rounded-md px-3 py-2 mb-4 mt-auto inline-block">
                    <p className="text-sm text-space-blue">
                      <span className="font-semibold">Creator:</span> {repo.creator}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center text-mars-red font-medium">
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