import one from "../assets/images/img1.jpeg"
import three from "../assets/images/img3.jpeg"
import four from "../assets/images/img4.jpeg"


// product


function Product() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="one"></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime atque delectus id? Reprehenderit, unde iusto nihil exercitationem eveniet quisquam.</p>

      </div>
      <div className="box">
        <img src={three} alt="three"></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime atque delectus id? Reprehenderit, unde iusto nihil exercitationem eveniet quisquam.</p>

      </div>
      <div className="box">
        <img src={four} alt="four"></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime atque delectus id? Reprehenderit, unde iusto nihil exercitationem eveniet quisquam.</p>

      </div>

    </div>
  )
}


export default Product

