import { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import FormContainer from "../../FormContainer";
// import upload from "../../../assets/images/upload.svg";
// import { FaMinusCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import { useCreatePackageMutation } from "../../../slices/packageSlice"

const FormOption = () => {
//   const [data, setData] = useState({
//     title: "",
//     price: "",
//     location: "",
//     description: "",
//   });

  // const [options, setOptions] = useState([
  //   {
  //     op_name: "",
  //     op_des: "",
  //     op_price: "",
  //     image: null,
  //   },
  // ]);

  // const handleChange = () => {
  //   // const { name, value } = e.target;
  //   // setData({ ...data, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  // };

  // upload image
  // const inputRef = useRef(null);
  // const [image, setImage] = useState("");

  // const handleImageClick = () => {
  //   inputRef.current.click();
  // };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };

  // const handleAddOption = () => {
  //   setOptions([
  //     ...options,
  //     {
  //       op_name: "",
  //       op_des: "",
  //       op_price: "",
  //       image: null,
  //     },
  //   ]);
  // };

  const [packageOpTitle, setpackageOpTitle] = useState('')
  const [packageOpDescription, setpackageOpDescription] = useState('')
  // const [packageOpMaxCount, setpackageOpMaxCount] = useState('')
  // const [packageOparea, setpackageOparea] = useState('')
  // const [packageOpType, setpackageOpType] = useState('')
  // const [packageOpPrice, setpackageOpPrice] = useState('')

  const [createPackage,{isLoading:packageLoading}]=useCreatePackageMutation()
  const navigate = useNavigate()
  
  const userInfo = localStorage.getItem('userInfo')
  const parsedUserInfo = JSON.parse(userInfo);
  const userId=parsedUserInfo.id

  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      const res = await createPackage({
        userId,
        packageOpTitle,
        packageOpDescription,
        // packageOpMaxCount,
        // packageOparea,
        // packageOpType,
        // packageOpPrice
        
      }).unwrap()
      navigate('/ServiceProvider/packagesView')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  // const handleRemoveOption = (index) => {
  //   if (index > 0) {
  //     const newOptions = [...options];
  //     newOptions.splice(index, 1);
  //     setOptions(newOptions);
  //   }
  // };

  return (
    <FormContainer className="SPPackageForm">
      <h3 className="packformh3">Options</h3>

      {/* {options.map((option, index) => ( */}

        {/* key={index} */}
        <div className="option">  
          {/* {index > 0 && (
            // Only render the remove icon for options other than the first one
            <div className="remove-icon">
              <FaMinusCircle className="removeOptionBtn" onClick={() => handleRemoveOption(index)} />
            </div>
          )} */}

          <Form method="post" onSubmit={handleSubmit} className="form">
            <FormGroup className="input">
              <Form.Label htmlFor="op_title">Package - Option Title</Form.Label>
              <FormControl
                type="text"
                name="op_title"
                onChange={(e)=>setpackageOpTitle(e.target.value)}
                value={packageOpTitle}
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="op_des">Description</Form.Label>
              <FormControl
                type="text"
                name="op_des"
                onChange={(e)=>setpackageOpDescription(e.target.value)}
                value={packageOpDescription}
              />
            </FormGroup>

            {/* <FormGroup className="input">
              <Form.Label htmlFor="op_count">Maximum Guest Count</Form.Label>
              <FormControl
                type="text"
                name="op_count"
                onChange={(e)=>setpackageOpMaxCount(e.target.value)}
                value={packageOpMaxCount}
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="op_area">Hall Area (sqrt) </Form.Label>
              <FormControl
                type="text"
                name="op_area"
                onChange={(e)=>setpackageOparea(e.target.value)}
                value={packageOparea}
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="op_type">Hall Type</Form.Label>
              <Form.Select 
                  size=""
                  value={packageOpType}
                  onChange={(e)=>setpackageOpType(e.target.value)}>
                  <option></option>
                  <option>Indoor - AC</option>
                  <option>Indoor - Non-AC</option>
                  <option>Outdoor</option>
              </Form.Select>
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="op_price">Price for an Hour</Form.Label>
              <FormControl
                type="text"
                name="op_price"
                onChange={(e)=>setpackageOpPrice(e.target.value)}
                value={packageOpPrice}
              />
            </FormGroup> */}


            {/* <Form.Label htmlFor="op_images">Add Images</Form.Label>
            <div className="image_container">
              <div onClick={handleImageClick} className="image">
                {image ? (
                  <img src={URL.createObjectURL(option.image)} />
                ) : (
                  <img src={upload} />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div> */}
          </Form>


        </div>
      {/* ))} */}

      {/* <h3 className="packformh3">More Options</h3>
      <div className="more_option">
        <Button type="button" className="optionBtn" onClick={handleAddOption}>
          Add another option
        </Button>
      </div> */}

      {/* <div className="btn_container">
        <Button type="submit" className="submitBtn">
          Submit
        </Button>
      </div> */}
    </FormContainer>
  );
};

export default FormOption;
