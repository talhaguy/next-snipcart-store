import Head from 'next/head'

import styles from '../styles/Home.module.css'

import products from '../products.json';
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />

      <main className={styles.main}>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p className={styles.cardDescription}>{ product.description }</p>
                <p>${ product.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Snipcart Store
      </footer>
    </div>
  )
}
