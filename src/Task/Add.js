import React,{ useRef, useState } from 'react'
import './task.css'

function AddUser() {

    const [userslist, setUserslist] = useState(
        {
            data: [],
            text:''
        }
    )
    const formRef = useRef(null);
    const [modal, setModal] = useState({
        first_name: ' ',
        last_name: '',
        email: '',
        avatar: '',
    })
    let data = userslist.data;
    const handleAdd = () => {
        console.log("Add in table");
        // const userslist=data.push(modal);
        var loop=''
        var i;;
        var arr = data.length+1
        for(let i = 0;i<=arr;i++){
            loop +=arr[i]
        }
        // console.log(loop)
        alert("are you sure")
        setUserslist({ ...userslist,loop:loop});

        formRef.current.reset();
    }


        // const { data, text } = userslist;
    //     const handleAdd = (e) => {
    //         e.preventDefault();
    //         data.push(text)
    //         // console.log("list", list)
    //         setUserslist({ ...userslist, data: data, text: ""  })
    //     setModal({ ...modal, [e.target.value]: e.target.name, modal: modal })
    // }
   
   
    return (
        <>
            <div class="container mt-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    AddUser
                </button>
                
            
            </div>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">ADD USER</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <form ref={formRef}>
                                <>
                                    <div>
                                        <input type='text' placeholder='firstName' className='first' />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='lastName' className='last' />
                                    </div>
                                    <div>
                                        <input type='text' placeholder='Email' className='last' />
                                    </div>
                                    <div>
                                        <input type='file' placeholder='Avater' className='avatar' />
                                    </div>
                                </>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" onClick={handleAdd} className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default AddUser;

