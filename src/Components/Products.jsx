import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import '../StyleSheet/Products.css';

const Products = () => {
    const [mounted, setMounted] = useState(true);
    const [product,setProducts] = useState([]);

    useEffect(()=>{
        const loadData = async function(){

            const {data} = await axios.get('http://localhost:5000/api/products');

            if (mounted){
                setProducts(data)

            }

        }
        loadData();
        return ()=>{
            setMounted(false)
        }
    },[mounted])
    console.log(product)
    return (
        <div className="Products__container">
            {
                product && <div className="Products">
                    {
                    product.map(item =>{
                        return <div className="Item">
                            <Link to={`/productdetail/${ item._id }`} >
                                <img src={item.image} alt=""/>
                                <h4>{item.productname}</h4>
                                <h3>{`Rent/day: ${item.rentperday}`}</h3>
                            </Link>
                        </div>
                    })
                }

                </div>
            }
            
        </div>
    )
}

export default Products
