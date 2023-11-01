// import React from 'react'
import { useEffect, useState } from 'react'
import { Button,InputGroup,Form } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
// import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AllSPList = () => {
    const userId = localStorage.getItem('userInfo')
    const user = JSON.parse(userId);
    const id = user.id
    const navigate=useNavigate()
    const [search, setSearch] = useState('');
    const [spNames, setSPnames] = useState([]);
    const [loading,setLoading]= useState(true)
    const [isloading,setIsLoading]= useState(true)

    useEffect(() => {
        axios
            .get(`/api/serviceprovider/getAllSProviders?id=${id}`)
            .then((response) => {
                setSPnames(response.data);
                setLoading(false)
                setIsLoading(true)
            })
            .catch((error) => {
                console.log('Error fetching names:', error);
            });
    }, [id,loading,isloading]);
    console.log(spNames);
    // Filter the SPnames array based on the search query
    
    const filteredSPnames = spNames.filter((snames) => {
        const nameMatch = snames.name.toLowerCase().includes(search.toLowerCase());
        const locationMatch = snames.location.toLowerCase().includes(search.toLowerCase());
        return nameMatch || locationMatch;
    });

    const handlePrefSubmit = (snames) => {
        try {
          axios.post(`/api/serviceprovider/addtoBlockPrefList`, {
            userId: id,
            blockId: snames.id,
            blockStatus: '1',
          });
          toast.success("Successfully added to Preference List")
          setIsLoading(false)
          navigate(`/ServiceProvider/blockList?id=${id}`)
          
        } catch (error) {
          console.error('Error adding to preference:', error);
        }
    };
    
    const handleBlockSubmit = (snames) => {
        try {
         axios.post(`/api/serviceprovider/addtoBlockPrefList`, {
            userId: id,
            blockId: snames.id,
            blockStatus: '0', 
          });
          toast.success("Successfully added to Block List")
          setIsLoading(false)
          navigate(`/ServiceProvider/blockList?id=${id}`)
        } catch (error) {
          console.error('Error blocking service provider:', error);
        }
    };
    
    if (spNames.length===0) {
        <div>Loading</div>
    }else{
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
                                        <Button className='prefeBtn' onClick={() => handlePrefSubmit(snames)}>Add to preference</Button>
                                        <Button className='blockBtn' onClick={() => handleBlockSubmit(snames)}>Block</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllSPList