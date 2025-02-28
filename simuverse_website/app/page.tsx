import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ImpactCard from '../components/ImpactCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">
              Why SimuVerse is Revolutionary
            </h2>
            <p className="text-[#718096] max-w-2xl mx-auto mt-4">
              SimuVerse redefines AI agent simulation with memory, structured reasoning, and decentralized interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Multi-Agent AI with Memory"
              description="Unlike static NPCs, agents in SimuVerse retain and recall past interactions, allowing for long-term learning and adaptive behavior."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Structured Reasoning & Interpretation"
              description="An Interpreter LLM converts agent responses into structured commands, making AI actions controllable, explainable, and modular."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Decentralized, Scalable AI Interaction"
              description="Each agent operates with its own local LLM, making it scalable without relying on centralized servers."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Tool-Based Interactions"
              description="Agents can use tools like MOVE, Converse, Scan, and Call, enabling them to navigate, communicate, and respond to environmental changes intelligently."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Subconscious Memory Agent"
              description="Intelligently determines when past knowledge is relevant, mimicking human cognition and enabling truly adaptive AI behaviors."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Real-time Decision Making"
              description="Agents can make decisions and respond to changes in their environment in real-time, creating truly dynamic multi-agent simulations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Mars Environment Section */}
      <section className="py-20 bg-gradient-to-br from-mars-surface/5 to-mars-orange/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="section-title">Simulated Mars Environment</h2>
              <p className="text-[#718096] mb-6">
                SimuVerse creates a detailed Mars habitat where AI agents live, work, and interact. This controlled environment allows for realistic testing of multi-agent behaviors and emergent social dynamics.
              </p>
              <ul className="space-y-4">
                {[
                  "Dynamic terrain with realistic physics constraints",
                  "Modular habitat systems that agents can interact with",
                  "Resource management challenges that drive agent behaviors",
                  "Day/night cycles that influence agent routines",
                  "Weather events that create environmental challenges"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mars-orange/20 flex items-center justify-center mt-0.5">
                      <svg className="h-4 w-4 text-mars-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-[#718096]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 w-full h-full max-h-[500px] relative rounded-xl overflow-hidden bg-mars-red/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-space-dark/5 to-mars-red/20 rounded-xl"></div>
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-mars-orange/30 to-mars-red/40 absolute animate-pulse-slow"></div>
                <div className="h-40 w-40 rounded-full bg-gradient-to-tl from-mars-dust/30 to-mars-surface/40 absolute animate-float"></div>
                <div className="z-10 text-space-blue text-center px-8">
                  <div className="font-mono text-sm opacity-80 mb-2">// Mars Simulation Environment</div>
                  <div className="font-bold">Virtual habitat for advanced AI agent research</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-tl from-mars-orange/20 to-transparent"></div>
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br from-mars-dust/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block">
              Impact of SimuVerse
            </h2>
            <p className="text-[#718096] max-w-2xl mx-auto mt-4">
              Transforming multiple domains through advanced AI simulation technology
            </p>
          </div>
          
          <div className="space-y-8">
            <ImpactCard 
              title="Game Development & NPC AI"
              description="Enhances open-world simulations, enabling NPCs that learn, adapt, and interact dynamically over time, creating more engaging and realistic gaming experiences."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              }
            />
            
            <ImpactCard 
              title="AI Research & RL Environments"
              description="Provides a sandbox for reinforcement learning, multi-agent collaboration, and real-world AI behavior testing in a controlled but complex environment."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
            />
            
            <ImpactCard 
              title="Defense & Security Simulations"
              description="Enables autonomous strategic decision-making, scenario planning, and AI-driven simulations for high-stakes environments where adaptive intelligence is critical."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            
            <ImpactCard 
              title="Virtual Assistants & Smart Agents"
              description="Paves the way for persistent AI companions that understand context, remember details, and evolve over time based on interactions with users and the environment."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-space-blue/5 to-space-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="section-title">About the Project</h2>
              <p className="text-[#718096] mb-6">
                SimuVerse was created by Roman Slack at Rochester Institute of Technology as a groundbreaking platform for AI research and multi-agent simulation.
              </p>
              <p className="text-[#718096] mb-6">
                The project aims to bridge the gap between theoretical AI research and practical applications, providing a sandbox environment where autonomous agents can develop complex behaviors through interactions.
              </p>
              <p className="text-[#718096]">
                Inspired by the concept of digital worlds like "The Matrix," SimuVerse is pushing the boundaries of what's possible in creating realistic, adaptive AI populations that can teach us about collective intelligence and emergent behaviors.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-space-blue mb-2">Project Goals</h3>
                <ul className="space-y-2">
                  {[
                    "Create a platform for testing multi-agent AI behaviors",
                    "Develop memory systems that enable long-term agent learning",
                    "Build tools for structured AI reasoning and decision-making",
                    "Establish a framework for emergent social dynamics",
                    "Provide a testbed for AI safety and alignment research"
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-mars-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-[#718096]">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-space-blue mb-2">Technical Foundation</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Unity", "LLaMA 3", "Ollama", "C#", "Python", 
                    "Reinforcement Learning", "LLM Integration", "Multi-Agent Systems"
                  ].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-space-blue/10 text-space-blue rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-space-blue to-space-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the SimuVerse Community</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Be part of the revolution in multi-agent AI simulation. Contribute, experiment, and help shape the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/roman-slack/simuverse" 
              className="px-8 py-3 bg-white text-space-blue font-medium rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              GitHub Repository
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
