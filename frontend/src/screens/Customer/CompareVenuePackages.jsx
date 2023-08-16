import React from 'react'
import { Button } from 'react-bootstrap';
import ViewPackagesCarrousal from '../../components/Cus/ViewPackagesCarrousal';
import venue5 from '../../assets/images/venue5.jpg';
import venue6 from '../../assets/images/venue6.jpg';
import venue1 from '../../assets/images/venue1.jpg';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { useLocation, useNavigate } from 'react-router-dom';


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
            {/* <ViewPackagesCarrousal /> */}
            <h2 className='compare-title'><b>Comparing Selected Venues</b></h2>
        </div>
        <div>
            <table className='compare-table'>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Package</th>
                    <td className='compare-table-data'>
                    <Link to={`/Venue?event_id=${event_id}&packageCount=2`}>
                        <Button>Add Package To Compare</Button>
                        </Link>
                    </td>
                    <td className='compare-table-data'>
                    <Link to={`/Venue?event_id=${event_id}&packageCount=2`}>
                        <Button>Add Package To Compare</Button>
                        </Link>
                    </td>
                    <td className='compare-table-data'>
                    <Link to={`/Venue?event_id=${event_id}&packageCount=2`}>
                        <Button>Add Package To Compare</Button>
                        </Link>
                    </td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Name</th>
                    <td className='compare-table-data'>Araliya Beach Resort</td>
                    <td className='compare-table-data'>Marino Beach Colombo</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Image</th>
                    <td className='compare-table-data'>
                    <Image src={venue5} thumbnail className="venueDesImg"/>
                    </td>
                    <td className='compare-table-data'>
                    <Image src={venue6} thumbnail className="venueDesImg"/>
                    </td>
                    <td className='compare-table-data'>
                    <Image  thumbnail className="venueDesImg" style={{backgroundColor:'#b8a8b7'}}/>
                    </td>
                </tr>
            

                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Location</th>
                    <td className='compare-table-data'>No:49, Canel Rd, Colombo</td>
                    <td className='compare-table-data'>No:4/A, Temple Rd, Colombo</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Price</th>
                    <td className='compare-table-data'>LKR 24,500</td>
                    <td className='compare-table-data'>LKR 53,900</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Maximum Guest Count</th>
                    <td className='compare-table-data'>250</td>
                    <td className='compare-table-data'>280</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Hall Area</th>
                    <td className='compare-table-data'>1200 sqft</td>
                    <td className='compare-table-data'>1300 sqft</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>Hall Type</th>
                    <td className='compare-table-data'>Indoor</td>
                    <td className='compare-table-data'>Indoor</td>
                    <td className='compare-table-data'></td>
                </tr>
                <tr className='compare-table-row'>
                    <th className='compare-table-header'>AC / Non AC</th>
                    <td className='compare-table-data'>AC</td>
                    <td className='compare-table-data'>AC</td>
                    <td className='compare-table-data'></td>
                </tr>

                <tr className='compare-table-row'>
                    <th className='compare-table-header'></th>
                    <td className='compare-table-data'>
                        <Link to={`/customer/eventdetails?id=${event_id}`}>
                        <Button className='compare-addEvent-btn'>Add to Event</Button>
                        </Link></td>
                    <td className='compare-table-data'>
                        <Link to={`/customer/eventdetails?id=${event_id}`}>
                        <Button className='compare-addEvent-btn'>Add to Event</Button>
                        </Link></td>
                    <td className='compare-table-data'>
                        <Link to={`/customer/eventdetails?id=${event_id}`}>
                        {/* <Button className='compare-addEvent-btn'>Add to Event</Button> */}
                        </Link></td>
                </tr>
                
                    
            </table>
        </div>
    </>
  )
}

export default CompareVenuePackages
