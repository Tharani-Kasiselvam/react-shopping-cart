import Navigation from "./Components/Navigation"
import Header from "./Components/Header"
import ProdSection from "./Components/ProdSection"

const App = () => {
    const products = [{
        "prod_name" : "Safety Pins",
        "prod_price" : "$40.00",
        "offer" : "N",
        "offer_price" : ""
    },
    {
        "prod_name" : "First Aid Box",
        "prod_price" : "$100.00",
        "offer" : "Y",
        "offer_price" : "$55.00" 
    }]
  return (
    <div>
         {/* <!-- Navigation--> */}
        <Navigation />
    
        {/* Header */}
        <Header />

        {/* Section */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[0]}/>
                         </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <ProdSection product_list = {products[1]}/>
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