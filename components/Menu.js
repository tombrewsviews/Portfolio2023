import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import tabs from '../tabs';

export default function Menu() {
  const router = useRouter();
  const activeTab = router.pathname.substring(1); // remove the leading slash

  return (
    <div className="flex-col w-full max-w-7xl mx-auto">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <Link href={`/${tab.id}`} key={tab.id}>
            <button
              onClick={() => router.push(`/${tab.id}`)}
              className={`${
                activeTab === tab.id ? 'text-black' : 'text-white hover:text-white/60'
              } relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
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
    </div>
  );
}