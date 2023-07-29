"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

const ProductTable = () => {
  const productsPerPage = 10; // Number of products to show per page
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const deleteProduct = async (productId) => {
    
    try {
      // Delete the product from Firestore using the product's ID
      await deleteDoc(doc(db, 'Products', productId));
  
      // Update the state to remove the deleted product
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  

  const fetchProducts = async () => {
    try {
      const productsCollectionRef = collection(db, 'Products');
      const querySnapshot = await getDocs(productsCollectionRef);

      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });

      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='table-container'>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Image</th>
            <th>Brand Name</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{indexOfFirstProduct + index + 1}</td>
              <td>
                <img src={product.imageURL} alt={product.productName} style={{ maxWidth: '100px' }} />
              </td>
              <td>{product.brandName}</td>
              <td>{product.productName}</td>
              <td>{product.productDescription}</td>
              <td> &#x20B9;{product.productPrice}</td>
              <td>{product.category}</td>
              <td>
                <button className='btns' id='editbtn'>
                  Edit
                </button>
                <button className='btns' id='delbtn' onClick={()=>deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='page-btn-container'>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentProducts.length < productsPerPage} onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
