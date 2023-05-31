import {useState, useEffect} from 'react'
import {getProducts, getProductByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc (categoryId)

            .then(response => {
                setProducts(response)
            })

            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (

        <div>

            <h2>{greeting} ¡Bienvenido a nuestra tienda de laptops! Explora nuestra amplia selección de laptops y encuentra la perfecta para tus necesidades.</h2>
            <ItemList products={products}/>

        </div>
   
    )
}


export default ItemListContainer;