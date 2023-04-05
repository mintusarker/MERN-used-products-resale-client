import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';
import Products from './Products';

const MyProducts = () => {

  const { user } = useContext(AuthContext);
 

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/itemName?email=${user?.email}`);
        const data = await res.json();
        // console.log(data);
        return data;
      }
      catch (error) {
        
      }
    }
  });


  if (isLoading) {
    return <Loading></Loading>
  };


  const handleDeleteProduct = id => {
    fetch(`http://localhost:5000/itemName/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Product deleted successfully');
        }
      })
  };


  return (
    <div className='mt-10'>
      <h2 className='text-2xl pl-5 my-5'>My Products: {products?.length}</h2>

      <div className='gap-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


        {
          products?.map(product => <Products
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          ></Products>)
        }
      </div>

    </div>
  );
};

export default MyProducts;