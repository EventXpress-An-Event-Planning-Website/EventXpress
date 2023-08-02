// import React from 'react'
import { Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

const AllSPList = ( {rows}) => {
  return (
    <div className='tableContainer'>
        {/* <div className='busSearch'>
            <label htmlFor="search">Search here
            <FaSearch />
            </label>
        </div> */}
        <div className="search-header">
            <div className="search-text">Search:</div>
            <input id="search-box" />
        </div>
        <table className='listTable'>
            <tbody className='allSPList'>{
                rows.map((row, idx) => {
                    // capitalize the status first letter
                    // const statusText = row.status.charAt(0).toUppserCase() + row.status.slice(1);
                    return <tr key={idx}>
                        <td>{row.busName} - {row.busAddress}</td>
                        
                        <td className='BPlistBtn'>
                            <Button className='prefeBtn'>Add to preference</Button>
                            <Button className='blockBtn'>Block</Button>
                        </td>
                    </tr>
                })
            }

            </tbody>
        </table>
    </div>
  )
}

export default AllSPList