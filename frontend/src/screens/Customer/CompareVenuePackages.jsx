import React from 'react'
import { Button } from 'react-bootstrap';
import ViewPackagesCarrousal from '../../components/Cus/ViewPackagesCarrousal';

const CompareVenuePackages = () => {

    const package1 =[{id:1, imag:"birthday1.jpg",location:"Galle",}];
  return (
    <>

        <div>
            <ViewPackagesCarrousal />
        </div>
        <div>
            <table className='compare-table'>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Package</th>
                    <td className='compare-table-data'>
                        <Button>Add Package To Compare</Button>
                    </td>
                    <td className='compare-table-data'>
                        <Button>Add Package To Compare</Button>
                    </td>
                    <td className='compare-table-data'>
                        <Button>Add Package To Compare</Button>
                    </td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Location</th>
                    <td className='compare-table-data'>John Doe</td>
                    <td className='compare-table-data'>Jane Smith</td>
                    <td className='compare-table-data'>Michael Johnson</td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Price</th>
                    <td className='compare-table-data'>30</td>
                    <td className='compare-table-data'>25</td>
                    <td className='compare-table-data'>35</td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Maximum Guest Count</th>
                    <td className='compare-table-data'>Engineer</td>
                    <td className='compare-table-data'>Teacher</td>
                    <td className='compare-table-data'>Doctor</td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Hall Area</th>
                    <td className='compare-table-data'>Engineer</td>
                    <td className='compare-table-data'>Teacher</td>
                    <td className='compare-table-data'>Doctor</td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Hall Type</th>
                    <td className='compare-table-data'>Engineer</td>
                    <td className='compare-table-data'>Teacher</td>
                    <td className='compare-table-data'>Doctor</td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>AC / Non AC</th>
                    <td className='compare-table-data'>Engineer</td>
                    <td className='compare-table-data'>Teacher</td>
                    <td className='compare-table-data'>Doctor</td>
                </tr>
                
            </table>
        </div>
    </>
  )
}

export default CompareVenuePackages
