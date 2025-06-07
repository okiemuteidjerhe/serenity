import styles from '../styles/upload.module.css'
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function Upload() {
    return (
        <div className={styles.container}>

            {/* Build a mini-nav custom component */}
            <form>
                <div className={styles.top}>
                    <div className={styles.dragArea}>
                        <FaCloudUploadAlt />
                        <div>
                            <h3>Drag and drop to upload</h3>
                            Browse to choose a file
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label>File Name</label>
                        <input placeholder='File Name' />
                    </div>


                    <div className={styles.field}>
                        <label>Description</label>
                        <input placeholder='Description' />
                    </div>

                </div>

                <button>Save</button>
            </form>
        </div>
    )
}
