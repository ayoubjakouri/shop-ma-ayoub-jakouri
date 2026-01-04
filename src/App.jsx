import { Header, Footer, ProductCard } from './components'
import products from './data/products'
import './App.css'

function App() {

  return (
    <>

      <Header />
      <h1>Shop.ma</h1>
      <div style={{display:'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
      {products.map((product)=>{
        return(

          <ProductCard product={product}/>
        )
      })}
      </div>
      <Footer />
    </>
  )
}

export default App
