import React, { useState } from 'react';

export default function Pay() {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePay = () => {
        // Implement payment logic here
        console.log(`Payment for ${description} processed`);
    };

    return (
        <div className="container text-center mb-12">
            <div className="row">
                <div className="col-6">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input 
                        type="text"  
                        id="description" 
                        className="form-control" 
                        placeholder="Description Product" 
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button onClick={handlePay}>Pay</button>
                </div>
            </div>
        </div>
    );
}