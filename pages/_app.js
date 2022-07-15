import AuthenticationProvider from "../providers/authentication";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}



export default MyApp;
