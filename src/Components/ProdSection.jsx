import { useState } from "react"

const ProdSection = ({product_list,modifyCartCount}) => {
    const [buttonTxt,updateBtnTxt] = useState("Add to Cart")
    const [cartCount,updateCartCount] = useState("0")

    const isOffer = (offer_val,prod_price,offer_price) => { 
        if(offer_val=='Y'){
            return (
                <div>
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Offer</div>
                <span className="text-muted text-decoration-line-through">{prod_price}  </span><b>{offer_price}</b>
                </div>
            )
        }
        else{
            return (
                <div>{prod_price}</div>
            )
        }
    }

    const manageCart = () => {
        if(buttonTxt=="Add to Cart"){
         updateBtnTxt("Remove from Cart");
         modifyCartCount("plus")
        }
        else{
            updateBtnTxt("Add to Cart")
            modifyCartCount("minus")        }
    }

  return (
    <div>
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={product_list.img} alt={product_list.prod_name} />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{product_list.prod_name}</h5>
                    {/* <!-- Product price--> */}
                    {isOffer(product_list.offer,product_list.prod_price,product_list.offer_price)}
                </div>
                
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={manageCart}>{buttonTxt}</button></div>
            </div>
                        
    </div>
  )
}

export default ProdSection