import React from 'react';
import { Accordion } from 'react-bootstrap';
import { X } from 'react-feather';
import { connect } from 'react-redux';

const Filter = (props) => {

    let { filteredLocations = [] } = !!props.filterData ? props.filterData : {};

    return <section className='filter-container'>
        <div className='title-container'>
            <h5>Filters</h5>
            <a role={'button'}>Clear</a>
        </div>
        <Accordion className='filter-accordian' defaultActiveKey={'Location'}>
            <Accordion.Item eventKey="Location">
                <Accordion.Header>Location </Accordion.Header>
                <Accordion.Body>
                    <input className='location-filter' placeholder='Location' />
                    <div className='selected-location'>
                        {[...filteredLocations].map(fil => <div key={fil} className='location-item'>{fil}<X /></div>)}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="Industry">
                <Accordion.Header>Industry </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="Business Type">
                <Accordion.Header>Business Type </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="Company Type">
                <Accordion.Header>Company Type </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="Filter by High to Low">
                <Accordion.Header>Filter by High to Low </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="Sort By">
                <Accordion.Header>Sort By </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="Number of Employees">
                <Accordion.Header>Number of Employees </Accordion.Header>
            </Accordion.Item>
        </Accordion>
    </section>
};

const mapStateToProps = (state) => ({
    filterData: state.filterData || {},
});

export default connect(mapStateToProps)(Filter);