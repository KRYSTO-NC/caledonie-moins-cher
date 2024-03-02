import { Link } from 'react-router-dom'
import './adminComponents.css'
import Modal from '../../shared/modal/Modal'
import { FaEdit } from 'react-icons/fa'

const AdminSubCategoryCard = ({ subcategory }) => {
  console.log(subcategory)

  return (
    <Link
      to={`/admin/sub-category/${subcategory._id}`}
      className="admin-sub-category-card"
    >
      <p>{subcategory.name}</p>
      <Modal modalBtn={<FaEdit style={{color:'orange'}}/>}>

      </Modal>
    </Link>
  )
}

export default AdminSubCategoryCard
