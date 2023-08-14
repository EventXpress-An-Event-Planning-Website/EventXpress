import React from 'react'
import { Button } from 'react-bootstrap';
import ViewPackagesCarrousal from '../../components/Cus/ViewPackagesCarrousal';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CompareVenuePackages = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const event_id= queryParams.get('event_id')
    const package1 =[{id:1, imag:"birthday1.jpg",location:"Galle",}];
    const navigate = useNavigate();

    const handleAddPackage =(event_id)=>{
        navigate(`/customer/event/Venue?event_id=${event_id}`)
    }
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
                        <Button onClick={()=>handleAddPackage(event_id)}>Add Package To Compare</Button>
                    </td>
                    <td className='compare-table-data'>
                        <Button onClick={()=>handleAddPackage(event_id)}>Add Package To Compare</Button>
                    </td>
                    <td className='compare-table-data'>
                        <Button onClick={()=>handleAddPackage(event_id)}>Add Package To Compare</Button>
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
