import "../styles/globals.css";
import AuthenticationProvider from "./providers/authentication";

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}

export default MyApp;
