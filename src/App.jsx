import React, { useEffect } from "react"
import Global from "./styles/Globals"
import Header from "./layout/Header"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import NotFound from "./pages/NotFound"
import Background from "./components/Background"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "./redux/feactures/product/productSlice"

export default function App() {
  const productState = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  if (productState.loading) {
    return <div>Loading...</div>
  }

  if (productState.error) {
    return <div>{error}</div>
  }
  return (
    <Background>
      <Global />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Background>
  )
}
