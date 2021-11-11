import '../../styles/pages/globals.css'
import { SideBarLeft } from '../components/sideBarLeft'
import { AuthProvider } from '../contexts/authContext'


function MyApp({ Component, pageProps }) {
 return (
 <AuthProvider>
    <Component {...pageProps} />
    <SideBarLeft />
  </AuthProvider>

 
 )
}

export default MyApp
