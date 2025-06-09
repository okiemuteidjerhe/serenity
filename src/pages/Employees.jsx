import styles from '../styles/employees.module.css'
import NavBar from '../components/NavBar'
import { FaPlus } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import Employee from '../images/employee.png'


export function Row(props) {
  /* console.log(props.person) */
  const { Names, Email, Role, Status, Segmentation } = props.person
  return (
    <tr>
      <td className={styles.left}>
        <div className={styles.avatar}>
          <img src={props.avatar || Employee} />
        </div>
        {Names}</td>
      <td className={styles.left}>{Email}</td>
      <td>{Role}</td>
      <td className={styles.status}><span>{Status}</span></td>
      <td>{Segmentation}</td>
    </tr>
  )
}

export default function Employees() {

  const data = [
    {
      id: 1,
      "Names": "Alexis Jane",
      "Email": "Alexisjane@gmail.com",
      "Role": "SalesManager",
      "Status": "Active",
      "Segmentation": "Remote"
    },
    {
      id: 2,
      "Names": "June Octavia",
      "Email": "Octaviajune@gmail.com",
      "Role": "Senior Developer",
      "Status": "Active",
      "Segmentation": "Remote"
    },
    {
      id: 3,
      "Names": "Maria Whittherapoon",
      "Email": "WhittherapoonM@gmail.com",
      "Role": "Backend Developer",
      "Status": "Active",
      "Segmentation": "Remote"
    },
    {
      id: 4,
      "Names": "Johnny Brevo",
      "Email": "BrevoJohnny@gmail.com",
      "Role": "Senior UK Designer",
      "Status": "Active",
      "Segmentation": "Hybrid"
    },
    {
      id: 5,
      "Names": "Derrick Orlando",
      "Email": "Derrickorlando@gmail.com",
      "Role": "Frontend Developer",
      "Status": "Active",
      "Segmentation": "On-site"
    }
  ]

  const employees = data.map(person => (
    <Row
      key={person.id}
      person={person}
    />
  ))

  /* console.log(employees) */

  return (
    <div className={styles.container}>
      <NavBar isCorporate={true} />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Employees</h3>
          <button><FaPlus /> Add Employee</button>
        </div>
        <div className={styles.info}>
          <form>
            <CiSearch size={24} />
            <input type='search' placeholder='Search employee' />
          </form>
          <table>
            <thead>
              <tr>
                <th>Names</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Segmentation</th>
              </tr>
            </thead>
            <tbody>
              {employees}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
