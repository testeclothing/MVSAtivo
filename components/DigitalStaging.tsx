import React from 'react';
import { 
  Waves, 
  Sun, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  PlayCircle 
} from 'lucide-react';

const TRANSFORMATIONS = [
  {
    icon: <Waves size={24} className="text-blue-500" />,
    title: "Dock to Sea",
    subtitle: "Concrete → Calm Bay",
    description: "We move the boat from the gray boatyard to a beautiful, calm bay. It stops looking like a storage cost and starts looking like a vacation.",
    image: "/images/img11.png" // Overhead Shot
  },
  {
    icon: <Sun size={24} className="text-yellow-400" />,
    title: "Sunlight Boost",
    subtitle: "Indoor Yellow → Natural White",
    description: "Photos taken inside sheds look yellow and old. We digitally 'turn off' the artificial lights and flood the boat with bright, modern daylight.",
    image: "/images/img22.png" // Bedroom Shot
  },
  {
    icon: <Compass size={24} className="text-cyan-400" />,
    title: "Ocean View",
    subtitle: "Marina Wall → Open Horizon",
    description: "When looking out the windows or from the cockpit, we replace the ugly marina walls or neighbors with the open ocean and sunset.",
    image: "/images/img66.png" // Cockpit Rear View
  },
  {
    icon: <Sparkles size={24} className="text-amber-400" />,
    title: "Deck Restoration",
    subtitle: "Weathered → Showroom Ready",
    description: "Gray or wet decking makes a boat look neglected. We digitally dry the surfaces and restore the warm, honey-colored tone of the wood.",
    image: "/images/img55.png" // Table/Wood Detail
  },
  {
    icon: <ShieldCheck size={24} className="text-emerald-400" />,
    title: "Digital Cleaning",
    subtitle: "Cluttered → Pristine",
    description: "We erase visual noise. We remove rust stains, hanging fenders, coiled hoses, and reflections. The boat stands alone.",
    image: "/images/img44.png" // Hull Detail
  },
  {
    icon: <PlayCircle size={24} className="text-orange-400" />,
    title: "Living Space",
    subtitle: "Dark → Inviting",
    description: "We open up the interior spaces, correcting lighting and shadows to show the true volume and comfort of the living areas.",
    image: "/images/33img.png" // Kitchen/Galley Shot
  }
];

const DigitalStaging: React.FC = () => {
  return (
    <section id="engine" className="py-24 bg-gray-50 dark:bg-[#0B0C10] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-200 dark:from-[#15171e] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Service Menu
              </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Refit Package</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We don't just "edit photos." We solve the 6 specific visual problems that keep boats sitting on the hard stand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item, index) => (
            <div key={index} className="group bg-white dark:bg-[#16181d] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalStaging;
