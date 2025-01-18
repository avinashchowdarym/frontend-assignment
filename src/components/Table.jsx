import React from 'react'
import '../App.css'
const Table = ({displayData, fundingData}) => {

  return (
    <table className='table'>
        
        {/* Table Header */}
        <thead className='table-head'>
            <tr className='table-row'>
                {
                    displayData?.map((data,index)=>{
                        return(
                            <th className='table-data' key={index}>
                                {data.label}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>

        {/* table body */}
        <tbody>
            {
                fundingData?.map((fund,index)=>{
                    return(
                        <tr className='table-row'>
                            {
                                displayData.map((dt,id)=>{
                                    return(
                                        <td className='table-data'>
                                            {fund[dt.key]}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>

    </table>
  )
}

export default Table