// import React from 'react'
import { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'
// import { FaSearch } from 'react-icons/fa';

const AllSPList = ( {rows}) => {
    const [search, setSearch] = useState('');

  return (
    <div className='tableContainer'>
        
        <InputGroup className="search-header">
            <Form.Control 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here" className="search-text">
            </Form.Control>
        </InputGroup>
        <table className='listTable'>
            <tbody className='allSPList'>
                {rows
                    .filter((row) => {
                        return search.toLowerCase() === '' ? row : 
                        row.busName.toLowerCase().includes(search) ||
                        row.busAddress.toLowerCase().includes(search)
                    })
                    .map((row, idx) => {
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