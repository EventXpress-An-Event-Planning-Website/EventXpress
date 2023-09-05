// import React from 'react'
import { FaMinusCircle } from 'react-icons/fa';
// import { useEffect, useState } from 'react'
// import axios from 'axios'

const PrefBlock = () => {

  return (
    <div className="preference_block_list">
        <div className="left_preference">
            <h3>Preference List</h3>
            <table className='listTable'>
                <tbody className='allSPList'>
                    <tr >
                        <td></td>
                        
                        <td className='minus_icon'><FaMinusCircle /></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="right_block">
            <h3>Block List</h3>
            <table className='listTable'>
                <tbody className='allSPList'>
                    <tr >
                        <td></td>
                        
                        <td className='minus_icon'><FaMinusCircle /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PrefBlock