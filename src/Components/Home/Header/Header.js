import React from 'react';

const Header = () => {
    return (
        <div className='bg-warning p-5 bg-pattern-1'>
            <div className='container-sm'>
                <div className='row mb-2'>
                    <h2 className='d-flex justify-content-center fw-bold fs-2'>EventMe</h2>
                    <h5 className='d-flex justify-content-center fw-light fs-5 text-light'> An event is not over until everyone is tired of talking about it.</h5>
                </div>
                <div className='row col-md-12 mb-2'>
                    <div className='d-flex justify-content-center d-grid gap-1 col-6 mx-auto'>
                        <input className='col fw-bold ps-3 bg-light rounded-start-3' type='text' placeholder='Search Event...' />
                        <button className='btn btn-primary rounded-end-3 rounded-start-0'>Search</button>
                    </div>
                </div>
                <div className='row col-md-12'>
                    <div className='d-flex justify-content-center d-grid col-md-6 mx-auto'>
                        <select className="form-select form-select-lg" aria-label="Default select example">
                            <option selected>Select Event Type</option>
                            <option value="1">Parties</option>
                            <option value="2">Events</option>
                            <option value="3">courses</option>
                            <option value="4">competitions</option>
                            <option value="5">hackathons</option>
                        </select>
                        <select className="form-select form-select-lg" aria-label="Default select example">
                            <option selected>Select area</option>
                            <option value="1">tunis</option>
                            <option value="2">ben arous</option>
                            <option value="3">zahra</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
