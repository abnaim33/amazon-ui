import Banner from "../components/Banner"
import Header from "../components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductFeed from "../components/ProductFeed";
export default function Home({ products }) {

  // console.log(products)

  return (
    <div>
      <div>

        <Header />
      </div>

      <main className="p-0">
        <Banner />

        <ProductFeed products={products} />
      </main>

    </div>
  )
}


export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json())


  return {
    props: {
      products
    }
  }

}