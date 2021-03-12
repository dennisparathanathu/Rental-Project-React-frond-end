import React, {useState, useEffect} from 'react'
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
                            <img src={item.image} alt=""/>
                            <h4>{item.productname}</h4>
                            <h3>{`Owner: ${item.owner}`}</h3>
                        </div>
                    })
                }

                </div>
            }
            
        </div>
    )
}

export default Products
