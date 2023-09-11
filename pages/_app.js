import '../styles/globals.css';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center min-h-screen bg-black">
      <div className="w-full max-w-xl mx-auto py-6 sm:px-6 lg:px-8">
        <Menu />
        <Component {...pageProps} />
        asdjhasd
      </div>
    </div>
  );
}

export default MyApp
