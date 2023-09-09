import '../styles/globals.css';
import { useState } from 'react';
import Menu from '../components/Menu';
import tabs from '../tabs';

export default function MyApp({ Component, pageProps }) {

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col items-center min-h-screen px-24 max-sm:px-5 max-w-7xl mx-auto w-full">
      <Menu />
      
      <Component {...pageProps} />

    </div>
  );
}