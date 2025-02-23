import React, { useState, useEffect } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


const Products = () => {

    const [products, setProducts] = useState([]);

    // Get all the products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('/api/v1/product/get-product')
            setProducts(data.products);
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong while getting all the products.')
        }
    };

    // lifecycle method...
    useEffect(() => {
        getAllProducts();
    }, []);



    return (
        <Layout>
            <div className='container-fluid m-3 p-3'>

                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>

                    <div className='col-md-9'>
                        <h1 className='text-center'>All Products</h1>
                        <div className='d-flex flex-wrap m-3 m-s' style={{ justifyContent: 'center' }}>
                            {products?.map((p) => (
                                <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`} className="product-link">
                                    <div className="card m-2" style={{ width: '16rem' }}  >

                                        <img src={`/api/v1/product/product-photo/${p._id}`}
                                            className="card-img-top"
                                            style={{ maxHeight: '18rem', padding: '.3rem', borderRadius: '12px' }}

                                            alt={p.name}
                                        />
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;