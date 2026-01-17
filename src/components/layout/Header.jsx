import TopBar from './TopBar'
import MainNav from './MainNav'

const Header = ({categories, categorie, updateCategorie}) => {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <TopBar />
      <MainNav
        categories={categories}
        categorie={categorie}
        updateCategorie={updateCategorie}
      />
    </header>
  )
}

export default Header
