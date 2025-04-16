import { useState } from 'react';
import Modal from './utils/Modal';
import Input from './utils/Input';
import ProductForm from './Components/ProductForm';
import AddProductModal from './Components/AddProductModal';
import EditProductModal from './Components/EditProductModal';
import Products from './Pages/Products';

function App() {
  const [showAddModal, setShowAddModal] = useState(false)

  function handleCloseAdd() {
    setShowAddModal(false)
  }
  
  return (
    <div>
      <button className='btn mr-4' onClick={() => setShowAddModal(true)}>Add Product</button>
      {/* <button className='btn' onClick={() => setShowEditModal((prev) => !prev)}>Edit modal</button> */}

      <AddProductModal show={showAddModal} onClose={handleCloseAdd} />
      {/* <EditProductModal show={showEditModal} onClose={handleCloseEdit} /> */}
      <Products/>
    </div>
  )
}

export default App



