import React, { useState } from 'react'

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const productImages = [
    'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image',
    'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image+2',
    'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image+3',
    'https://via.placeholder.com/400x400/E5E7EB/9CA3AF?text=Product+Image+4'
  ]

  const relatedProducts = [
    { id: 1, name: 'Pearl Necklace', price: '₹1,200', originalPrice: '₹1,500', image: 'https://via.placeholder.com/200x200/E5E7EB/9CA3AF?text=Product+1' },
    { id: 2, name: 'Gold Chain', price: '₹2,500', originalPrice: '₹3,000', image: 'https://via.placeholder.com/200x200/E5E7EB/9CA3AF?text=Product+2' },
    { id: 3, name: 'Silver Ring', price: '₹800', originalPrice: '₹1,000', image: 'https://via.placeholder.com/200x200/E5E7EB/9CA3AF?text=Product+3' },
    { id: 4, name: 'Diamond Earrings', price: '₹3,200', originalPrice: '₹4,000', image: 'https://via.placeholder.com/200x200/E5E7EB/9CA3AF?text=Product+4' }
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-gray-700">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-gray-700">Jewellery</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gold-Plated Pearls Necklace</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border mb-3">
              <img 
                src={productImages[selectedImage]} 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-rose-400' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Gold-Plated Pearls Necklace</h1>
              <p className="text-gray-600">Made with 925 Silver</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">(4.5)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold text-gray-900">₹1,600</span>
                <span className="text-xl text-gray-500 line-through">₹2,000</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">20% OFF</span>
              </div>
              <p className="text-sm text-gray-600">*Inclusive of all taxes</p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Easy Returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Warranty Included</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 font-medium"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className=" flex flex-cols gap-2">
              <button className="w-full bg-white text-rose-400 border border-rose-400  py-3 px-5  font-semibold text-lg hover:bg-rose-500 hover:text-white transition-colors">
                Add to Cart
              </button>
              <button className="w-full bg-rose-400 text-white py-3 px-5 font-semibold text-lg hover:bg-rose-500 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Elegant gold-plated pearl necklace crafted with premium 925 silver base. 
                Features lustrous freshwater pearls arranged in a classic design. 
                Perfect for both casual and formal occasions.
              </p>
            </div>

            {/* Specifications */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Material:</span>
                  <span className="text-gray-900">925 Silver with Gold Plating</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Pearl Type:</span>
                  <span className="text-gray-900">Freshwater Pearls</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Length:</span>
                  <span className="text-gray-900">18 inches</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Weight:</span>
                  <span className="text-gray-900">15 grams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="border-t pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Similar to this</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-rose-600 font-bold text-lg">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  </div>
                  <button className="w-full bg-rose-400 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-500 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Picks Section */}
        <div className="border-t pt-16 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Top picks for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <div key={`top-${product.id}`} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-rose-600 font-bold text-lg">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  </div>
                  <button className="w-full bg-rose-400 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-500 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
