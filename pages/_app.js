import DefaultLayout from "../layouts/default";
import AuthenticationProvider from "../providers/authentication";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthenticationProvider>
  );
}

export default MyApp;
