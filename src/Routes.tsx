import { Routes, Route } from 'react-router-dom'
import { CoffeeShop } from './pages/CoffeeShop'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CoffeeShop />} />
      </Route>
    </Routes>
  )
}
