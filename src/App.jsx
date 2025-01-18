import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table';
import Pagination from './components/Pagination';
const URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;
const pageLimit = 5;

function App() {
  const [fundData , setFundData] = useState([]);
  const [page,setPage] = useState(Number(1));

  const dataToDisplay = [
    { label: "S.no.", key: "s.no" },
    { label: "Percentage funded", key: "percentage.funded" },
    { label: "Amount pledged", key: "amt.pledged" },
  ];

  const FetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFundData(data);
  }
  useEffect(()=>{
    FetchData();
  },[]);
  // console.log(fundData);

  const fundSlice = fundData?.slice((page-1)*pageLimit , (page-1)*pageLimit+pageLimit )


  return (
    <div className="App">
      {/* // Table
      // Pagination */}
      {
        fundSlice && (
          <>
            <Table displayData={dataToDisplay} fundingData={fundSlice}  />
            <Pagination page = {page} setPage = {setPage} totalPages = {Math.ceil(fundData.length / pageLimit)} />
          </>
        )
      }
    </div>
  )
}

export default App
