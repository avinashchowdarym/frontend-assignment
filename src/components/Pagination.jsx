import React, { useEffect } from 'react'
import '../App.css'

const Pagination = ({page,setPage,totalPages}) => {

    let paginate = Array.from({length : totalPages} , (_,i) => i+1);
    let pageshow ;
    console.log(pageshow)
    useEffect(()=>{
        
            if(page > (totalPages-5)) {
                 pageshow = paginate.slice(-5,0);
            }
            else{
                 pageshow = paginate.slice(0,5);
            }
    },[page])
    if(page > totalPages - 5){
        pageshow = paginate.slice(totalPages-5,totalPages);
    }
    else{
        pageshow = paginate.slice(page-1,page+4);
    }
  return (
    <div className='pagination-container'>
        {
             (
                <button onClick={()=>setPage(page!== 1 ? page-1 : 1)}>
                    Previous
                </button>
            )
        }
        <div className="pagination"
        onClick={(e)=>setPage(parseInt(e.target.innerText))}
        >
            {
                pageshow.map((pageNumber)=>(
                    <button key={pageNumber} className={pageNumber === page ? "active" : ""}>
                        {pageNumber}
                    </button>
                ))
            }

        </div>

        {
            page < totalPages && (
                <button onClick={()=>setPage(page+1)}>
                    Next
                </button>
                
            )
        }
        <button onClick={()=>setPage(totalPages)}>
                    Last
                </button>
    </div>
  )
}

export default Pagination