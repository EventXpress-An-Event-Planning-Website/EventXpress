// import React from 'react'
import { useEffect, useState } from 'react'
import { Button,InputGroup,Form } from 'react-bootstrap'
import axios from 'axios'
// import { FaSearch } from 'react-icons/fa';

const AllSPList = () => {
    const userId = localStorage.getItem('userInfo')
    const user = JSON.parse(userId);
    const id = user.id

    const [search, setSearch] = useState('');
    const [spNames, setSPnames] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/serviceprovider/getAllSProviders?id=${id}`)
            .then((response) => {
                setSPnames(response.data.PNames);
            })
            .catch((error) => {
                console.log('Error fetching names:', error);
            });
    }, []);

    // Filter the SPnames array based on the search query
    const filteredSPnames = spNames.filter((snames) => {
        const nameMatch = snames.name.toLowerCase().includes(search.toLowerCase());
        const locationMatch = snames.location.toLowerCase().includes(search.toLowerCase());
        return nameMatch || locationMatch;
    });

    return (
        <div className='tableContainer'>
            <InputGroup className="search-header">
                <Form.Control 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here" className="search-text"
                    value={search} // Set the input value to the state
                />
            </InputGroup>
            <table className='listTable'>
                <tbody className='allSPList'>
                    {filteredSPnames.map((snames) => {
                        return (
                            <tr key={snames.id}>
                                <td>{snames.name} - {snames.location}</td>
                                <td className='BPlistBtn'>
                                    <Button className='prefeBtn'>Add to preference</Button>
                                    <Button className='blockBtn'>Block</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllSPList