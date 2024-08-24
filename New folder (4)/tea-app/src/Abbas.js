import React, { useState } from 'react';

const Abbas = (props) => {
    const [name, setName] = useState(''); // Initial state should be an empty string

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected typo
        props.getdata(name);
    }


    return (
        <>
            <form onSubmit={handleSubmit}> {/* Changed div to form */}
                <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button type="submit">Submit</button> {/* Added type="submit" */}
            </form>
        </>
    );
}

export default Abbas;
