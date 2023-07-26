import {Button} from 'react-bootstrap';
import CusEvents from './CusEvents';
import { Link } from 'react-router-dom'
import { CustomerNavbar } from './CustomerNavbar';
import { CusCrrousal } from './CusCrrousal';


const CusHome = () => {


  return (
    <>
    
    <section id='content' className='cus-block'>
      <CusCrrousal />
      <Link to='/customer/myEvents'>
            <Button >Create Event</Button>
      </Link>
      <CusEvents/>

    </section>
    </>

  );
};

export default CusHome;
