import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const CompareStageRentalPackages = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const event_id = queryParams.get("event_id");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");

    useEffect(() => {
        axios
            .get(`/api/customer/CompareStageRental?event_id=${event_id}`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    // console.log(data);
    const package1 = [{ id: 1, imag: "birthday1.jpg", location: "Galle" }];
    const navigate = useNavigate();

    const handleAddPackage = (event_id) => {
        navigate(`/customer/event/Venue?event_id=${event_id}`);
    };

    const handleAddtoEvent = (package_id)=>{
        axios.post(`/api/customer/addStagetoEvent?pack_id=${package_id}&event_id=${event_id}`)
        .then((response)=>{
            const result= response.data
            if (result===true) {
                toast.success("Package Added Successfully")
            }else{
                toast.error('Please Add Package again')
            }
            navigate(`/customer/eventdetails?id=${event_id}`)
        })
        .catch((error)=>{
    
        })
    
      }

    if (data.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div>
                    {/* <ViewPackagesCarrousal /> */}
                    <h2 className="compare-title">
                        <b>Comparing Selected Stage Rental Packages</b>
                    </h2>
                </div>
                <div>
                    <table className="compare-table">
                        <tr className="compare-table-row">
                            <th className="compare-table-header"></th>
                            <td className="compare-table-data">
                                <Link
                                    to={`/customer/event/StageRental?event_id=${event_id}&packageCount=2&column=1`}
                                >
                                    <Button>Add Package To Compare</Button>
                                </Link>
                            </td>
                            <td className="compare-table-data">
                                <Link
                                    to={`/customer/event/StageRental?event_id=${event_id}&packageCount=2&column=2`}
                                >
                                    <Button>Add Package To Compare</Button>
                                </Link>
                            </td>
                            <td className="compare-table-data">
                                <Link
                                    to={`/customer/event/StageRental?event_id=${event_id}&packageCount=2&column=3`}
                                >
                                    <Button>Add Package To Compare</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Package Name</th>

                            <td className="compare-table-data">{data[0].package_title}</td>
                            <td className="compare-table-data">{data[1].package_title}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">{data[2].package_title}</td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header"></th>
                            <td className="compare-table-data">
                                <Image
                                    src={`../../src/assets/images/uploads/${data[0].sp_images}`}
                                    thumbnail
                                    className="venueDesImg"
                                />
                            </td>
                            <td className="compare-table-data">
                                <Image
                                    src={`../../src/assets/images/uploads/${data[1].sp_images}`}
                                    thumbnail
                                    className="venueDesImg"
                                />
                            </td>
                            <td className="compare-table-data">
                                {data[2] !== undefined ? (
                                    <Image
                                        src={`../../src/assets/images/uploads/${data[2].sp_images}`}
                                        thumbnail
                                        className="venueDesImg"
                                    />
                                ) : (
                                    <Image
                                        thumbnail
                                        className="venueDesImg"
                                        style={{ backgroundColor: "#b8a8b7" }}
                                    />
                                )}
                            </td>
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Service Provider</th>
                            <td className="compare-table-data">{data[0].package_busname}</td>
                            <td className="compare-table-data">{data[1].package_busname}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">
                                    {data[2].package_busname}
                                </td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>

                        <tr className="compare-table-row">
                            <th className="compare-table-header">Location</th>
                            <td className="compare-table-data">{data[0].package_address}</td>
                            <td className="compare-table-data">{data[1].package_address}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">
                                    {data[2].package_address}
                                </td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Price</th>
                            <td className="compare-table-data">{data[0].package_price}</td>
                            <td className="compare-table-data">{data[1].package_price}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">{data[2].package_price}</td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Stage Type</th>
                            <td className="compare-table-data">{data[0].stage_type}</td>
                            <td className="compare-table-data">{data[1].stage_type}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">{data[2].stage_type}</td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Stage Height</th>
                            <td className="compare-table-data">{data[0].stage_height}</td>
                            <td className="compare-table-data">{data[1].stage_height}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">{data[2].stage_height}</td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        <tr className="compare-table-row">
                            <th className="compare-table-header">Size & Dimension</th>
                            <td className="compare-table-data">{data[0].stage_size}</td>
                            <td className="compare-table-data">{data[1].stage_size}</td>
                            {data[2] !== undefined ? (
                                <td className="compare-table-data">{data[2].stage_size}</td>
                            ) : (
                                <td className="compare-table-data"></td>
                            )}
                        </tr>
                        {/* <tr className="compare-table-row">
              <th className="compare-table-header">Maximum Guest Count</th>
              <td className="compare-table-data">{data[0].package_op_count}</td>
              <td className="compare-table-data">{data[1].package_op_count}</td>
              {data[2] !== undefined ? (
                <td className="compare-table-data">
                  {data[2].package_op_count}
                </td>
              ) : (
                <td className="compare-table-data"></td>
              )}
            </tr>
            <tr className="compare-table-row">
              <th className="compare-table-header">Hall Area</th>
              <td className="compare-table-data">{data[0].package_op_area}</td>
              <td className="compare-table-data">{data[1].package_op_area}</td>
              {data[2] !== undefined ? (
                <td className="compare-table-data">
                  {data[2].package_op_area}
                </td>
              ) : (
                <td className="compare-table-data"></td>
              )}
            </tr>
            <tr className="compare-table-row">
              <th className="compare-table-header">Hall Type</th>
              <td className="compare-table-data">{data[0].package_op_type}</td>
              <td className="compare-table-data">{data[1].package_op_type}</td>
              {data[2] !== undefined ? (
                <td className="compare-table-data">
                  {data[2].package_op_type}
                </td>
              ) : (
                <td className="compare-table-data"></td>
              )}
            </tr> */}

            <tr className="compare-table-row">
              <th className="compare-table-header"></th>
              <td className="compare-table-data">
                
                  <Button className="compare-addEvent-btn" onClick={()=>handleAddtoEvent(data[0].package_id)}>Add to Event</Button>
                
              </td>
              <td className="compare-table-data">
                <Link to={`/customer/eventdetails?id=${event_id}`}>
                  <Button className="compare-addEvent-btn" onClick={()=>handleAddtoEvent(data[1].package_id)}>Add to Event</Button>
                </Link>
              </td>
              {data[2] !== undefined ? (
                <td className="compare-table-data">
                
                  <Button className="compare-addEvent-btn" onClick={()=>handleAddtoEvent(data[2].package_id)}>Add to Event</Button>
               
              </td>
              ) : (
                <td className="compare-table-data"></td>
              )}
              
            </tr>
                    </table>
                </div>
            </>
        );
    }
};

export default CompareStageRentalPackages;
