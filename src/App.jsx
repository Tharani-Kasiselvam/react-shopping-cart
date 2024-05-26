import Header from "./Components/Header"
import ProdSection from "./Components/ProdSection"
import { useState } from "react"
const App = () => {

    const [navCartCount, updateNavCartCount] = useState(0)

    const modifyCartCount = (count_operation) => {
        if(count_operation=="plus")
            updateNavCartCount(navCartCount+1)

        else if(count_operation=="minus")
            updateNavCartCount(navCartCount-1)

        else
            updateNavCartCount(navCartCount)
    }

    const products = [{
        "prod_name" : "Safety Pins",
        "prod_price" : "₹20.00",
        "offer" : "N",
        "offer_price" : ""
    },
    {
        "prod_name" : "First Aid Box",
        "prod_price" : "₹200.00",
        "offer" : "Y",
        "offer_price" : "₹135.00" 
    },
    {
        "prod_name" : "Buds",
        "prod_price" : "₹130.00",
        "offer" : "N",
        "offer_price" : "" 
    },
    {
        "prod_name" : "A to Z Mini Screw Driver",
        "prod_price" : "₹260.00",
        "offer" : "Y",
        "offer_price" : "₹189.00" 
    },
    {
        "prod_name" : "A to Z Mini Screw Driver",
        "prod_price" : "₹260.00",
        "offer" : "Y",
        "offer_price" : "₹200.00" 
    }]
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">EASY Shopping</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{navCartCount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        {/* Header */}
        <Header />

{/* Section */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[0]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[1]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[2]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[3]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[4]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                   </div>
                </div>
        </section>

     
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; tmj website 2024</p></div>
        </footer>

    </div>
  )
}

export default App