import React,{useContext} from 'react'
import { ShopContext } from './../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';

export default function () {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>

      <h1>{Number(productId)}</h1>
    </div>
  )
}
