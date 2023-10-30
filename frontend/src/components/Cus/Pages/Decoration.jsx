import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import FilterPackages from "./FilterPackages";
import { useState } from "react";
import deco1 from '../../../assets/images/deco1.jpg';
import deco2 from '../../../assets/images/deco2.jpg';
import deco3 from '../../../assets/images/deco3.jpg';
import deco4 from '../../../assets/images/deco4.jpg';
import deco5 from '../../../assets/images/deco5.jpg';
import deco6 from '../../../assets/images/deco6.jpg';
import deco9 from '../../../assets/images/deco9.jpg';
import deco8 from '../../../assets/images/deco8.jpg';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Decoration = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const package_Count= Number(queryParams.get('packageCount'))
    const event_id= queryParams.get('event_id')
    const column_id =Number(queryParams.get('column'))
    const [selectedCount,setSelectedCount]=useState(package_Count)
    const [loading,setLoading]=useState(true)
    const [decoPackage,setDecoPackage]=useState([])
    const [decosData,setDecosData]=useState([])
    const [error,setError]=useState("")

    useEffect(() => {

        const fetchedData=(async()=>{

            axios.get(`/api/customer/viewDecoPackage`)
                .then(response => {
                    setDecoPackage(response.data)
                    setLoading(false);
                    console.log(decoPackage);
                    
                
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
            
            
            
        })

        const fetchedPackCount=(async()=>{
            const service ='Decoration'
            axios.get(`/api/customer/getPackageCount?event_id=${event_id}&service=${service}`)
                .then(response => {
                    setSelectedCount(response.data)
                    setLoading(false);
                  
                    
                
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
            
            
            
        })
        if(event_id===null){
            fetchedData()
            setDecosData(decoPackage)
            
        }else{
            fetchedData()
            setDecosData(decoPackage)
            fetchedPackCount()
        }
      }, [loading]);


    // const decosData = [
    //     {
    //         id: 1,
    //         image: deco9,
    //         pckgName: '21st Birthday Package',
    //         title: 'by Cool Party Rentals',
    //         text: 'Cool Party Rentals considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 2,
    //         image: deco1,
    //         pckgName: 'Bridal Shower',
    //         title: 'by Party House Decor',
    //         text: 'Party House Decor considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 3,
    //         image: deco3,
    //         pckgName: 'Baby Shower',
    //         title: 'by Epic Party Magic',
    //         text: 'Epic Party Magic considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 4,
    //         image: deco4,
    //         pckgName: 'Teens Birthday Package',
    //         title: 'by Party Funland',
    //         text: 'Party Funland considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 5,
    //         image: deco6,
    //         pckgName: 'Gender Reveal',
    //         title: 'by Creative Dreams',
    //         text: 'Creative Dreams considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 6,
    //         image: deco5,
    //         pckgName: 'Proposal Package',
    //         title: 'by Glitter and Glue',
    //         text: 'Glitter and Glue considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 7,
    //         image: deco2,
    //         pckgName: 'Gender Reveal',
    //         title: 'by Streamers Suprise',
    //         text: 'Streamers Suprise considers about concept, theme, decor items and set up of the event.'
    //     },
    //     {
    //         id: 8,
    //         image: deco8,
    //         pckgName: 'Kids Birthday Package',
    //         title: 'by Fun Times Inc',
    //         text: 'Fun Times Inc considers about concept, theme, decor items and set up of the event.'
    //     }
    // ];

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <>
        {event_id === null ?
            <div style={{ "display": "flex" }}>
                <Sidebar />
                <div className="row custom-row">
                <FilterPackages/>
                    <h1 className="pckg-name">Decoration Packages</h1>
                    {decosData.map((deco) => (
                        <div className="col-md-3 custom-col" key={deco.package_id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${deco.sp_images}`} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{deco.package_title}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">by {deco.package_busname}</Card.Text>
                                    <Card.Text className="s-text">{deco.package_description}</Card.Text>
                                    <Link to={`/DecorationDes?pac=${deco.package_id}`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>:<div style={{ "display": "flex" }}>
               
                <div className="row custom-row" style={{marginLeft:'3%'}}>
                <FilterPackages/>
                    <h1 className="pckg-name">Decoration Packages</h1>
                    {decosData.map((deco) => (
                        <div className="col-md-3 custom-col" key={deco.package_id}>

                            <Card className="s-card" style={{ width: '18rem' }} >
                                <Card.Img className="s-img" variant="top" src={`../../src/assets/images/uploads/${deco.sp_images}`} />
                                <Card.Body>
                                    <Card.Title className="s-main-title">{deco.package_title}</Card.Title>
                                    <Card.Text className="s-main-title-pckg">by {deco.package_busname}</Card.Text>
                                    <Card.Text className="s-text">{deco.package_description}</Card.Text>
                                    <Link to={`/customer/event/DecorationDes?event_id=${event_id}&packageCount=${selectedCount}&column=${column_id}&pac=${deco.package_id}`}>
                                        <Button className="s-btn" variant="primary">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>}

            {/* <div className="s-pagination">
                <div>
                    <Pagination>{items}</Pagination>
                </div>

            </div> */}
        </>
    );
};

export default Decoration;