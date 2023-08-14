// import React from 'react'
import { FaMinusCircle } from 'react-icons/fa';

const PrefBlock = ({rows}) => {
  return (
    <div className="preference_block_list">
        <div className="left_preference">
            <h3>Preference List</h3>
            <table className='listTable'>
                <tbody className='allSPList'>{
                    rows.map((row, idx) => {
                        // capitalize the status first letter
                        // const statusText = row.status.charAt(0).toUppserCase() + row.status.slice(1);
                        return <tr key={idx}>
                            <td>{row.busName} - {row.busAddress}</td>
                            <td className='minus_icon'><FaMinusCircle /></td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        </div>

        <div className="right_block">
            <h3>Block List</h3>
            <table className='listTable'>
                <tbody className='allSPList'>{
                    rows.map((row, idx) => {
                        // capitalize the status first letter
                        // const statusText = row.status.charAt(0).toUppserCase() + row.status.slice(1);
                        return <tr key={idx}>
                            <td>{row.busName} - {row.busAddress}</td>
                            <td className='minus_icon'><FaMinusCircle /></td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PrefBlock