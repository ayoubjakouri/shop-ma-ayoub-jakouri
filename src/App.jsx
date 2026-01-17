import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import Productslist from './components/products/ProductsList'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './App.css'
import { useState } from 'react'

function App() {
  const [categories, setCategories] = useState(["All Category", "men's clothing", "women's clothing", "jewelery", "electronics"])
  const [categorie, setCategorie] = useState("All Category")
  return (
    <>
      <Header
        categories={categories}
        categorie={categorie}
        updateCategorie={setCategorie}

      />
      <Routes>
        <Route path="/" element={
          <Home
            categories={categories}
            categorie={categorie}
            updateCategorie={setCategorie}
          />}
        />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App
