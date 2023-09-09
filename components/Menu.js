import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

let tabs = [
  { id: 'impact', label: 'Impact' },
  { id: 'projects', label: 'Projects' },
  { id: 'goals', label: 'Career Goals' },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <Link href={`/${tab.id}`} key={tab.id}>
          <button
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'text-black' : 'hover:text-white/60'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{tab.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}
