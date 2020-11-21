import '../styles/globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router'

function useResetHistory() {
  const router = useRouter()

  useEffect(() => {
    console.log("DEBUG: in MyApp useEffect")

    document.addEventListener("snipcart.ready", () => {
      Snipcart.events.on('snipcart.initialized', async (snipcartState) => {
        console.log("DEBUG: replacing old history state with " + router.pathname)
        console.log("DEBUG: " + (history.state ? history.state : "''"))

        await router.replace(router.pathname)

        console.log("DEBUG: -> ")
        console.log("DEBUG: " + JSON.stringify(history.state))
      });
    });
  }, [])
}

function MyApp({ Component, pageProps }) {
  useResetHistory()

  return <Component {...pageProps} />
}

export default MyApp
