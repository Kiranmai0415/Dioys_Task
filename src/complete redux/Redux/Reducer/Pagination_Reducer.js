import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setPostPage } from '../Action/Actions';
import { Button } from 'react-bootstrap';

const Pages = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.users); 

    const [currentPage, postPage] = useSelector((state) => ({
        currentPage: state.currentPage,
        postPage: state.postPage,
    }));

    const first = currentPage  *  postPage;
    const second = first - postPage;
    const total = user.slice(second, first);
    
    const handlePage = (page)=>{
        dispatch(setCurrentPage(page));
    }

    const handlePageChange = (e) =>{
        dispatch(setPostPage(parseInt(e.target.value)))
    }
    let pageNumber = []
    let res = user.length;
    let sum = postPage;
    for (let i = 1; i < Math.ceil(res / sum); i++) {
        pageNumber.push(i);
        console.log("page", pageNumber);
    }


    return (
        <>
            <div>
                <select name='' onChange={ handlePageChange} >
                    {/* <option value={'select'} >Select</option> */}
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                {
                    pageNumber.map((each) => {
                        return (
                            <Button key={each} onClick={handlePage(each)}>{each}</Button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Pages