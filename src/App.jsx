import Header from "./Components/Header"
import ProdSection from "./Components/ProdSection"
import { useState } from "react"
const App = () => {
    //State to navigate the Cart Counter based on Add/Remove
    const [navCartCount, updateNavCartCount] = useState(0)

    //Modifies the Cart counter - plus for increment and minus for decrement
    const modifyCartCount = (count_operation) => {
        if(count_operation=="plus")
            updateNavCartCount(navCartCount+1)

        else if(count_operation=="minus")
            updateNavCartCount(navCartCount-1)

        else
            updateNavCartCount(navCartCount)
    }

    //Product Lists
    const products = [{
        "prod_name" : "Pencil Box",
        "prod_price" : "₹150.00",
        "offer" : "N",
        "offer_price" : "",
        "img" : "https://m.media-amazon.com/images/I/61KasEBk3HL._SX679_.jpg"
    },
    {
        "prod_name" : "School Bag",
        "prod_price" : "₹500.00",
        "offer" : "Y",
        "offer_price" : "₹335.00" ,
        "img" : "https://staranddaisy.in/wp-content/uploads/2024/02/kids-School-bags-Genius_Comet_Blue_1.jpg"
    },
    {
        "prod_name" : "Water Bottle",
        "prod_price" : "₹230.00",
        "offer" : "N",
        "offer_price" : "" ,
        "img" : "https://m.media-amazon.com/images/I/61q8CuKeHWL._SX679_.jpg"
    },
    {
        "prod_name" : "Pencil",
        "prod_price" : "₹100.00",
        "offer" : "N",
        "offer_price" : "",
        "img" : "https://m.media-amazon.com/images/I/61+vZ1bAiEL._SY879_.jpg"
    },
    {
        "prod_name" : "Rubber",
        "prod_price" : "₹105.00",
        "offer" : "Y",
        "offer_price" : "₹89.00",
        "img" : "https://i.etsystatic.com/21765430/r/il/74b711/2845704081/il_1588xN.2845704081_lid2.jpg"
    },
    {
        "prod_name" : "Lunch Towel",
        "prod_price" : "₹20.00",
        "offer" : "N",
        "offer_price" : "",
        "img" : "https://zahya.in/wp-content/uploads/2023/11/1-2.jpg"
    },
    {
        "prod_name" : "Sharpner",
        "prod_price" : "₹20.00",
        "offer" : "N",
        "offer_price" : "",
        "img" : "https://5.imimg.com/data5/FZ/KS/NI/SELLER-3545876/pencil-sharpener-for-kids-1000x1000.jpg"
    },
    {
        "prod_name" : "NoteBook",
        "prod_price" : "₹120.00",
        "offer" : "Y",
        "offer_price" : "₹99",
        "img" : "https://5.imimg.com/data5/SELLER/Default/2021/9/IR/IA/TI/133605709/kids-school-notebook-1000x1000.jpg"
    },
    {
        "prod_name" : "Pen",
        "prod_price" : "₹15.00",
        "offer" : "N",
        "offer_price" : "",
        "img" : "https://5.imimg.com/data5/DY/YD/MY-15468671/44-1000x1000.jpg"
    },
    {
        "prod_name" : "Tiffen Box",
        "prod_price" : "₹365.00",
        "offer" : "Y",
        "offer_price" : "₹290.00",
        "img" : "https://m.media-amazon.com/images/I/31hlyhUFcOL._SX300_SY300_QL70_FMwebp_.jpg"
    }]

  return (
    <div>
        {/* Navigation - Top */}
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

        {/* Header Component*/}
        <Header />

        {/* Section */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* A single Component to load Multiple Products */}
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
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[5]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[6]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[7]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[8]} modifyCartCount={modifyCartCount}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[9]} modifyCartCount={modifyCartCount}/>
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