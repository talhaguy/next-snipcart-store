import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FaShoppingCart } from 'react-icons/fa';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        </Head>

        <body>
         <div>
          <h1>
            Snipcart Store
          </h1>

          <p>
            <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
              <FaShoppingCart />
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">$0.00</span>
            </a>
          </p>
        </div>

          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
