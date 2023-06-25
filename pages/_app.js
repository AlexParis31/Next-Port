import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HGPW3MMGQ4"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-HGPW3MMGQ4');
    </script>
  <Navbar />
    <Component {...pageProps} />
  </>
  )
}
