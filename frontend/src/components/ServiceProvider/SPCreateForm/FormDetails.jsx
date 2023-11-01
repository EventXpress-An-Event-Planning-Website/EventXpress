import { useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import FormContainer from "../../FormContainer";
import { useNavigate } from "react-router-dom";
import { useCreatePackageMutation } from "../../../slices/packageSlice";
import { useUploadSingleMutation } from "../../../slices/uploadApiSlice";
import { toast } from 'react-toastify';

const FormDetails = () => {
  const [packageBusName, setpackageBusName] = useState("");
  const [packageTitle, setpackageTitle] = useState("");
  const [packageAddress, setpackageAddress] = useState("");
  const [packageContact, setpackageContact] = useState("");
  const [packageDescription, setpackageDescription] = useState("");
  const [packagePrice, setpackagePrice] = useState("");
  const [packageType, setpackageType] = useState("");
  const [packageImage, setpackageImage] = useState(null);

  const [packageOpTitle, setpackageOpTitle] = useState("");
  const [packageOpDescription, setpackageOpDescription] = useState("");
  const [packageOpMaxCount, setpackageOpMaxCount] = useState("");
  const [packageOparea, setpackageOparea] = useState("");
  const [packageOpType, setpackageOpType] = useState("");

  const [packageServingSize, setpackageServingSize] = useState("");
  const [packageCakeShape, setpackageCakeShape] = useState("");
  const [packageAllergy, setpackageAllergy] = useState("");

  const [packageMenu, setpackageMenu] = useState("");

  const [packageDecoElements, setpackageDecoElements] = useState("");

  const [packageStageType, setpackageStageType] = useState("");
  const [packageStageHeight, setpackageStageHeight] = useState("");
  const [packageStageSize, setpackageStageSize] = useState("");

  const [packageTools, setpackageTools] = useState("");
  const [packageFormat, setpackageFormat] = useState("");

  const [packageSoundSource, setpackageSoundSource] = useState("");
  const [packageLights, setpackageLights] = useState("");

  const [uploadSingle] = useUploadSingleMutation();

  const [createPackage] = useCreatePackageMutation();
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;

  //upload images
  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append("file", img);
        const response = await uploadSingle(imageFormData);
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
          return imageFilename;
        } else {
          throw new Error("Error uploading image: Invalid response format");
        }
      }
      return ""; // If no image is provided, return an empty string
    } catch (error) {
      console.error("Error uploading image:", error);
      return ""; // Return an empty string if there is an error during upload
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const spImageFilename = await uploadImage(packageImage);
      

      if (packageType === "Venue") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageOpTitle,
          packageOpDescription,
          packageOpMaxCount,
          packageOparea,
          packageOpType,
          packageImage: spImageFilename,
          packageType,
        }).unwrap();
      } else if (packageType === "Cake") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageServingSize,
          packageCakeShape,
          packageAllergy,
        }).unwrap();
      } else if (packageType === "Catering") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageMenu,
        }).unwrap();
      } else if (packageType === "Stage") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageStageType,
          packageStageSize,
          packageStageHeight,
        }).unwrap();
      } else if (packageType === "Photography") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageTools,
          packageFormat,
        }).unwrap();
      } else if (packageType === "LightsANDSounds") {
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageSoundSource,
          packageLights,
        }).unwrap();
      } else if (packageType === "Decoration"){
        await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
          packageType,
          packageDecoElements,
        }).unwrap();
      }
      toast.success("Package Created Successfully")
      navigate("/ServiceProvider/packagesView");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  //upload image
  const handleSPImageChange = (e) => {
    const file = e.target.files[0];
    setpackageImage(file);
  };


  return (
    <div className="SPPackageForm">
      <FormContainer>
        <h3 className="packformh3">Package Information</h3>
        <div className="pack_info">
          <Form method="post" onSubmit={handleSubmit} className="form">

            <FormGroup className="input">
              <Form.Label htmlFor="businessname">Business Name</Form.Label>
              <FormControl
                type="text"
                name="packageBusName"
                placeholder="Enter your business name"
                onChange={(e) => setpackageBusName(e.target.value)}
                value={packageBusName}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="title">Package Name</Form.Label>
              <FormControl
                type="text"
                name="packageTitle"
                placeholder="Enter your package name"
                onChange={(e) => setpackageTitle(e.target.value)}
                value={packageTitle}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="address">Business address</Form.Label>
              <FormControl
                type="text"
                name="packageAddress"
                placeholder="Enter your business address"
                onChange={(e) => setpackageAddress(e.target.value)}
                value={packageAddress}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="busContact">Contact Number</Form.Label>
              <FormControl
                type="number"
                name="packageContact"
                placeholder="Enter your business contact number"
                onChange={(e) => setpackageContact(e.target.value)}
                value={packageContact}
                min="10"
                max="10"
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="description">
                Description about package
              </Form.Label>
              <FormControl
                type="text"
                name="packageDescription"
                placeholder="Enter business description"
                onChange={(e) => setpackageDescription(e.target.value)}
                value={packageDescription}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="price">Price</Form.Label>
              <FormControl
                type="number"
                name="packagePrice"
                placeholder="Enter price"
                onChange={(e) => setpackagePrice(e.target.value)}
                value={packagePrice}
                min="0"
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="type">Package Type</Form.Label>
              <Form.Select
                size=""
                value={packageType}
                onChange={(e) => setpackageType(e.target.value)}
                required
              >
                <option></option>
                <option>Venue</option>
                <option>Photography</option>
                <option>Decoration</option>
                <option>Catering</option>
                <option>Cake</option>
                <option>LightsANDSounds</option>
                <option>Stage</option>
              </Form.Select>
            </FormGroup>

            <Form.Group className="my-4" controlId="spImage">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleSPImageChange}
                required
              />
            </Form.Group>

            {/* {packageType !== "Venue" && (
              <React.Fragment>
                <Form.Group className="my-4" controlId="additionalImage1">
                  <Form.Label>Add Additional Image 1</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
                
                <Form.Group className="my-4" controlId="additionalImage2">
                  <Form.Label>Add Additional Image 2</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
                
                <Form.Group className="my-4" controlId="additionalImage3">
                  <Form.Label>Add Additional Image 3</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
              </React.Fragment>
            )} */}


            {/* option part for venue type */}
            {packageType === "Venue" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="op_title">
                      Package - Option Title
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="op_title"
                      placeholder="Enter hall name"
                      onChange={(e) => setpackageOpTitle(e.target.value)}
                      value={packageOpTitle}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Description</Form.Label>
                    <FormControl
                      type="text"
                      name="op_des"
                      placeholder="Enter hall description"
                      onChange={(e) => setpackageOpDescription(e.target.value)}
                      value={packageOpDescription}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Maximum Count</Form.Label>
                    <FormControl
                      type="number"
                      name="op_maxcount"
                      placeholder="Enter hall maximum count"
                      onChange={(e) => setpackageOpMaxCount(e.target.value)}
                      value={packageOpMaxCount}
                      min="0"
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Hall area</Form.Label>
                    <FormControl
                      type="number"
                      name="op_maxcount"
                      placeholder="Enter hall area(sqrt)"
                      onChange={(e) => setpackageOparea(e.target.value)}
                      value={packageOparea}
                      min="0"
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Hall Type</Form.Label>
                    <Form.Select
                      size=""
                      value={packageOpType}
                      onChange={(e) => setpackageOpType(e.target.value)}
                      required
                    >
                      <option></option>
                      <option>Indoor - AC</option>
                      <option>Indoor - Non-AC</option>
                      <option>Outdoor</option>
                    </Form.Select>
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for cake package */}
            {packageType === "Cake" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="serving_size">
                      Serving Size
                    </Form.Label>
                    <FormControl
                      type="number"
                      name="serving_size"
                      placeholder="Enter the serving size"
                      onChange={(e) => setpackageServingSize(e.target.value)}
                      value={packageServingSize}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="cake_shape">Cake Shape</Form.Label>
                    <FormControl
                      type="text"
                      name="cake_shape"
                      placeholder="Enter cake shape"
                      onChange={(e) => setpackageCakeShape(e.target.value)}
                      value={packageCakeShape}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="allergy">Allergy Information</Form.Label>
                    <FormControl
                      type="text"
                      name="allergy"
                      placeholder="Enter allergy information (nuts, milk, gluten free)"
                      onChange={(e) => setpackageAllergy(e.target.value)}
                      value={packageAllergy}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for catering package */}
            {packageType === "Catering" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="menu">
                      Menu
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="menu"
                      placeholder="Enter the Menu"
                      onChange={(e) => setpackageMenu(e.target.value)}
                      value={packageMenu}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for decoration package */}
            {packageType === "Decoration" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="deco_elements">
                      Decoration Elements
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="deco_elements"
                      placeholder="Enter the decoration elements"
                      onChange={(e) => setpackageDecoElements(e.target.value)}
                      value={packageDecoElements}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for stage package */}
            {packageType === "Stage" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="stage_type">
                      Stage Type
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="stage_type"
                      placeholder="Enter stage type"
                      onChange={(e) => setpackageStageType(e.target.value)}
                      value={packageStageType}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="stage_height">Stage Height</Form.Label>
                    <FormControl
                      type="number"
                      name="stage_height"
                      placeholder="Enter stage height (feet)"
                      onChange={(e) => setpackageStageHeight(e.target.value)}
                      value={packageStageHeight}
                      min="1"
                      max="4"
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="stage_size">Stage size and dimention</Form.Label>
                    <FormControl
                      type="text"
                      name="stage_size"
                      placeholder="Enter stage size"
                      onChange={(e) => setpackageStageSize(e.target.value)}
                      value={packageStageSize}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for stage package */}
            {packageType === "Photography" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="tools">
                      Photography Equipment
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="tools"
                      placeholder="Enter tools"
                      onChange={(e) => setpackageTools(e.target.value)}
                      value={packageTools}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="delivery_format">Photo delivery format</Form.Label>
                    <FormControl
                      type="text"
                      name="delivery_format"
                      placeholder="Enter delivery format"
                      onChange={(e) => setpackageFormat(e.target.value)}
                      value={packageFormat}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}

            {/* option part for stage package */}
            {packageType === "LightsANDSounds" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
          
                  <FormGroup className="input">
                    <Form.Label htmlFor="sound_source">Sound Source</Form.Label>
                    <Form.Select
                      size=""
                      value={packageSoundSource}
                      onChange={(e) => setpackageSoundSource(e.target.value)}
                      required
                    >
                      <option></option>
                      <option>DJ</option>
                      <option>Pre recorded music</option>
                    </Form.Select>
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="lights">Lightning Fixtures</Form.Label>
                    <FormControl
                      type="text"
                      name="lights"
                      placeholder="Enter lightning fixtures"
                      onChange={(e) => setpackageLights(e.target.value)}
                      value={packageLights}
                      required
                    />
                  </FormGroup>

                </div>
              </FormContainer>
            )}


            <div className="btn_container">
              <Button type="submit" className="submitBtn">
                Submit
              </Button>
            </div>

          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default FormDetails;
