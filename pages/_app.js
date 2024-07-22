import Header from "@/components/madules/Header/Header";
import 'bootstrap/dist/css/bootstrap.css'
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
    )


 
 

 

}
