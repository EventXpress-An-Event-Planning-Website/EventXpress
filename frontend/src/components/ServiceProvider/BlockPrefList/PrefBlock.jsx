// import React from 'react'
import { useState, useEffect } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const PrefBlock = () => {
    const userId = localStorage.getItem('userInfo')
    const user = JSON.parse(userId);
    const id = user.id

    const [prefList, setPrefList] = useState([]);
    const [blockList, setBlockList] = useState([]);
    const [isloading,setIsLoading]= useState(true)

    useEffect(() => {
        axios
            .get(`/api/serviceprovider/getPreferenceSProviders?id=${id}`)
            .then((response) => {
                setPrefList(response.data);
                setIsLoading(true)
            })
            .catch((error) => {
                console.log('Error fetching names:', error);
            });
    }, [id,isloading]);
    
    useEffect(() => {
        axios
            .get(`/api/serviceprovider/getBlockSProviders?id=${id}`)
            .then((response) => {
                setBlockList(response.data);
                setIsLoading(true)
            })
            .catch((error) => {
                console.log('Error fetching names:', error);
            });
    }, [id,isloading]);


    const handlePrefRemove = (snames) => {
        const list ={
            id:snames.id
        }
        try {
          axios.post(`/api/serviceprovider/removefromBlockPrefList`, list);
          toast.success("Successfully remove from Preference List")
          setIsLoading(false)
          
        } catch (error) {
          console.error('Error adding to preference:', error);
        }
    };

    const handleBlockRemove =(snames) => {
        const list ={
            id:snames.id
        }
        try {
        axios.post(`/api/serviceprovider/removefromBlockPrefList`, list);
          toast.success("Successfully remove from Block List")
          setIsLoading(false)
          
        } catch (error) {
          console.error('Error blocking service provider:', error);
        }
    };

  return (
    <div className="preference_block_list">
        <div className="left_preference">
            <h3>Preference List</h3>
            {prefList.length===0 ? null :(
            <table className='listTable'>
                <tbody className='allSPList'>
                    {prefList.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name} - {item.location}</td>
                                
                                <td className='minus_icon'><FaMinusCircle onClick={() => handlePrefRemove(item)}/></td>
                            </tr>
                        )
                    })}
              
                </tbody>
            </table>
            )}
        </div>

        <div className="right_block">
            <h3>Block List</h3>
            {blockList.length===0 ? null :(
            <table className='listTable'>
                <tbody className='allSPList'>
                    {blockList.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name} - {item.location}</td>
                                
                                <td className='minus_icon'><FaMinusCircle onClick={() => handleBlockRemove(item)}/></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            )}
        </div>
    </div>
  )
}

export default PrefBlock