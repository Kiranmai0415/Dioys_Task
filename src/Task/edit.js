import React, { useRef, useState } from 'react'
import './task.css'

function EditUser() {

    const [edit, setEdit] = useState({
        data:[]
    });
    const formRef =useRef(null);
    const handleSubmit=(e)=>{
        console.log("edited");
        e.preventDefault();
        setEdit({...edit, [e.target.value]:e.target.name})
        formRef.current.reset();
    }
    
  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSave = (user, id) => {
 
    const Userslist = edit.data.filter((each) => each.id === user.id)
    console.log("filterUserslist=>", Userslist)
    alert("are you sure")
    formRef.current.reset();
  };


    return (
        <>
            <div class="container mt-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Edit
                </button>
            </div>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit USER</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <form ref={formRef}>
                            <>
                                <div>
                                <input type='text'id='first' placeholder='firstName' className='first' onClick={handleEdit}/>
                                </div>
                                <div>
                                <input type='text'id='last' placeholder='lastName' className='last'  onClick={handleEdit}/>
                                </div>
                                <div>
                                <input type='text'id='email' placeholder='Email' className='last'  onClick={handleEdit}/>
                                </div>
                                <div>
                                <input type='file'id='avatar' placeholder='Avater' className='avatar'  onClick={handleEdit}/>
                                </div>
                                </>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" onClick={handleSave} className="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default EditUser;

