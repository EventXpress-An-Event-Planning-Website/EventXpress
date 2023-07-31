// import React from 'react'
import { Button } from 'react-bootstrap'

const BlockList = ( {rows}) => {
  return (
    <div className='tableContainer'>
        <div className='busSearch'>
            <label htmlFor="search">Search here</label>
        </div>
        <table className='listTable'>
            <tbody>{
                rows.map((row, idx) => {
                    // capitalize the status first letter
                    // const statusText = row.status.charAt(0).toUppserCase() + row.status.slice(1);
                    return <tr key={idx}>
                        <td>{row.busName} - {row.busAddress}</td>
                        
                        <td>
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

export default BlockList