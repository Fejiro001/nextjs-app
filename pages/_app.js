import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // Thursday
    <div>
      {/**This will appear on all pages */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
