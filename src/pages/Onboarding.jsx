import React from 'react'
import { FaCamera } from 'react-icons/fa'

export default function Onboarding() {
    return (
        <div>
            <form>
                <div>
                    <FaCamera />
                    <div>
                        <h3>Drag and drop to upload</h3>
                        Browse to choose a file
                    </div>
                </div>
                <div>
                    <div>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </div>

                    <div>
                        <label>Email</label>
                        <input placeholder='Email' />
                    </div>

                    <div>
                        <label>Role</label>
                        <input placeholder='Role' />
                    </div>

                    <div>
                        <label>Segmentation</label>

                    </div>
                </div>


                <button>Add Employee</button>
            </form>
        </div>
    )
}