import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaArrowLeft } from 'react-icons/fa';
import SCardsR from '../components/SCardsR';

export default function NailPolishDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        const data = await response.json();
        setProduct(data);
        setActiveImage(data.image_link);
        
        // Fetch related products from same brand
        if (data.brand) {
          const relatedResponse = await fetch(
            `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${data.brand}&product_type=nail_polish`
          );
          const relatedData = await relatedResponse.json();
          setRelatedProducts(relatedData.filter(item => item.id !== id).slice(0, 4));
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    alert(`${product.name} added to cart!`);
    // Implement your actual cart logic here
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse h-96 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p>Product not found</p>
        <Link to="/" className="text-pink-700 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/"
        className="flex items-center text-pink-700 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* Product Images */}
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <img
              src={activeImage || product.image_link}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {[product.image_link, ...(product.product_colors || []).map(color => color.colour_name)].map((img, index) => (
              <button
                key={index}
                className="w-16 h-16 bg-gray-100 rounded border border-gray-200 flex-shrink-0"
                onClick={() => setActiveImage(img)}
              >
                {index === 0 ? (
                  <img
                    src={img}
                    alt="Product"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div 
                    className="w-full h-full"
                    style={{ backgroundColor: img }}
                    title={img}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">by {product.brand || 'Unknown Brand'}</p>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating || 0) ? 'text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600">
              ({product.rating || '0'} rating, {product.review_count || '0'} reviews)
            </span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-2xl font-bold text-pink-700 mb-2">
              ${product.price || 'N/A'}
            </p>
            <p className="text-gray-600 mb-4">{product.description || 'No description available.'}</p>

            {product.product_colors && (
              <div className="mb-4">
                <p className="font-semibold mb-2">Available Colors:</p>
                <div className="flex flex-wrap gap-2">
                  {product.product_colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.hex_value }}
                      title={color.colour_name}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-800 transition"
              >
                Add to Cart
              </button>
              <button className="p-3 border border-pink-700 text-pink-700 rounded-lg hover:bg-pink-50 transition">
                <FaHeart />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Product Details</h2>
            <table className="w-full">
              <tbody>
                {product.brand && (
                  <tr>
                    <td className="py-2 font-semibold text-gray-600">Brand</td>
                    <td className="py-2">{product.brand}</td>
                  </tr>
                )}
                {product.product_type && (
                  <tr>
                    <td className="py-2 font-semibold text-gray-600">Type</td>
                    <td className="py-2">{product.product_type}</td>
                  </tr>
                )}
                {product.category && (
                  <tr>
                    <td className="py-2 font-semibold text-gray-600">Category</td>
                    <td className="py-2">{product.category}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">More from {product.brand}</h2>
          <SCardsR initialProducts={relatedProducts} />
        </div>
      )}
    </div>
  );
}