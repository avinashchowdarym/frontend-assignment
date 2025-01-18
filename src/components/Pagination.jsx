import React from 'react'
import '../App.css'

const Pagination = ({page,setPage,totalPages}) => {

    let paginate = Array.from({length : totalPages} , (_,i) => i+1);
    console.log(page)

    
  return (
    <div className='pagination-container'>
        {
            page > 1 && (
                <button onClick={()=>setPage(page!== 1 ? page-1 : 1)}>
                    Back
                </button>
            )
        }
        <div className="pagination"
        onClick={(e)=>setPage(parseInt(e.target.innerText))}
        >
            {
                paginate.map((pageNumber)=>(
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