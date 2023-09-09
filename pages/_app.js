import '../styles/globals.css';
import { useState } from 'react';
import Menu from '../components/Menu';

export default function MyApp({ Component, pageProps }) {
  let tabs = [
    { id: 'impact', label: 'Impact' },
    { id: 'projects', label: 'Projects' },
    { id: 'goals', label: 'Career Goals' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      <Component {...pageProps} />
    </div>
  );
}
