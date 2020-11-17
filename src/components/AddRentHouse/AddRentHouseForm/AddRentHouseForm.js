import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddRentHouseForm = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    };

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', e.target.title.value);
        formData.append('location', e.target.location.value);
        formData.append('price', e.target.price.value);
        formData.append('bathroom', e.target.bathroom.value);
        formData.append('bedroom', e.target.bedroom.value);

        fetch('https://aqueous-ravine-41043.herokuapp.com/addApartment', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('One rent house successfully added')
            }
        })
        e.preventDefault()
    }

    return (
        <div className="m-3">
            <form onSubmit={handleSubmit}>
                <div className="row">
                   <div className="col-md-6">
                    <div className="form-group">
                            <label className="font-weight-bold" for="title">Service Title</label>
                            <input type="text" className="form-control" 
                            name="title"
                            id="title"
                            placeholder="Enter Title"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" for="location">Location</label>
                            <input type="text" className="form-control" 
                            name="location"
                            id="location"
                            placeholder="Enter Location"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" for="bathroom">No of Bathroom</label>
                            <input type="text" className="form-control" 
                            name="bathroom"
                            id="bathroom"
                            placeholder="Bathroom"
                            required
                            />
                        </div>
                   </div>
                   <div className="col-md-6">
                   <div className="form-group">
                        <label className="font-weight-bold" for="price">Price</label>
                        <input type="text" className="form-control" 
                        name="price"
                        id="price"
                        placeholder="Price"
                        required
                        />
                    </div>
                        <div className="form-group">
                            <label className="font-weight-bold" for="bedroom">No of Bedroom</label>
                            <input type="text" className="form-control" 
                            name="bedroom"
                            id="bedroom"
                            placeholder="Bedroom"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <span className="font-weight-bold">Thumbnail</span>
                            <br/>
                            <label className="btn btn-outline-success mt-2" for="thumbnail"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                            <input type="file" className="form-control d-none" 
                            onChange={handleFileChange}
                            name="thumbnail"
                            id="thumbnail"
                            placeholder="Bedroom"
                            required
                            />
                        </div>
                   </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddRentHouseForm;