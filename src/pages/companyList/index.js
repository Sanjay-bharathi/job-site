import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Clock, Phone, Search } from 'react-feather';
import { connect } from 'react-redux';
import { AddressIcon, CheckVerified, PlusSquare, SearchIcon } from '../../utils/customSvg';
import * as Feather from 'react-feather';
import Rating from 'react-rating';

const CompanyList = (props) => {

    console.log('111->companyList->', props);

    let { companyList = [] } = !!props ? props : {}

    return <section className='company-list-container'>
        {
            [...companyList].length ? [...companyList].map(company => {
                return <div className='company-item-wrapper'>
                    <div className='company-item-container'>
                        <div className='company-body-continer'>
                            <Row>
                                <Col xs={2}>
                                    <Image src={company.logo} className='company-logo' />
                                </Col>
                                <Col xs={10}>
                                    <div className='FJCBAIC mb-1'>
                                        <span className='FAIC'>
                                            {!!company.is_add ? <b className='text-success me-2'>Ad </b> : <></>}
                                            {company.name}.
                                            {!!company.is_verified ? <CheckVerified className='ms-2' /> : <></>}
                                        </span>
                                        <span>
                                            <PlusSquare />
                                        </span>
                                    </div>
                                    <span className='company-title'>
                                        {company.title}
                                        <Image src={company.country_logo} />
                                        {company.country}
                                    </span>
                                    {
                                        !!company.work_list && [...company.work_list].length ? <ul className='work-items'>
                                            {
                                                [...company.work_list].map(work => {
                                                    return <li>{work}</li>
                                                })
                                            }
                                        </ul> : <></>
                                    }
                                    <p className='FAIS FJR'><AddressIcon className='me-2 mt-1' /><span><> {company.address}</></span></p>
                                    <div className='FJCBAIC'>
                                        <span><Search width={'20'} height={'20'} stroke='#0071E3' className='me-2' />Founding Year : {company.founding_year}</span>
                                        <span><Phone width={'20'} height={'20'} stroke='#0071E3' className='me-2' />{company.phone}</span>
                                        <span><Clock width={'20'} height={'20'} stroke='#0071E3' className='me-2' />Open {company.opening_time} Close {company.closing_time}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='company-footer-continer'>
                            <div className='FJCBAIC'>
                                <span>Min Order : <b>{company.min_order}</b>  Team : <b>{company.team}</b>  Response Rate : <b>{company.response_rate}%</b></span>
                            </div>
                        </div>
                    </div>
                    <div className='company-review-container'>
                        <Rating
                            className='feedback-star'
                            emptySymbol={<Feather.Star width={'30'} height={'30'} stroke='#d2d2d7' />}
                            fullSymbol={<Feather.Star width={'30'} height={'30'} fill='#73cf36' stroke='#73cf36' />}
                            initialRating={company.rating}
                            readonly={true}
                        />
                        <span className='text-primary'>
                            {company.no_of_reviews} Reviews
                        </span>
                        <button className='write-review-button mt-3'>
                            <Feather.Edit3 />
                            Write Review
                        </button>
                        <div className='FJCAIC mt-5 w-100'>
                            <div className='FAIC FDC me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 388.516 372.006">
                                    <g id="Group_9616" data-name="Group 9616" transform="translate(-181.761 -190.015)">
                                        <path id="Path_3258" data-name="Path 3258" d="M384.62,562.02a187.406,187.406,0,0,1-40.379-4.422,184.385,184.385,0,0,1-69.105-30.957l-80.6,33.258a9.248,9.248,0,0,1-11.551-13.148l42.434-74.039a184.435,184.435,0,0,1-22.773-136.73c22.062-100.14,121.48-163.65,221.61-141.59a186,186,0,0,1-39.636,367.63ZM276.46,506.84a9.249,9.249,0,0,1,5.645,1.922,167.734,167.734,0,1,0-38.153-41.332,9.251,9.251,0,0,1,.277,9.652l-31.754,55.4,60.449-24.945a9.3,9.3,0,0,1,3.531-.7Z" fill="#0071e3" />
                                        <path id="Path_3259" data-name="Path 3259" d="M320.77,373.62a21.623,21.623,0,1,1-21.625-21.625A21.625,21.625,0,0,1,320.77,373.62" fill="#0071e3" />
                                        <path id="Path_3260" data-name="Path 3260" d="M405.87,373.62a21.623,21.623,0,1,1-21.621-21.625A21.624,21.624,0,0,1,405.87,373.62" fill="#0071e3" />
                                        <path id="Path_3261" data-name="Path 3261" d="M490.97,373.62a21.623,21.623,0,1,1-21.621-21.625A21.624,21.624,0,0,1,490.97,373.62" fill="#0071e3" />
                                    </g>
                                </svg>
                                <span>Chat Now</span>
                            </div>
                            <div className='FAIC FDC'>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="42" height="48" viewBox="0 0 473.58 392">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <path id="Path_3263" data-name="Path 3263" d="M139.21,180H612.79V572H139.21Z" fill="#7e7e7e" />
                                        </clipPath>
                                    </defs>
                                    <g id="Group_9617" data-name="Group 9617" transform="translate(-139.21 -180)" clip-path="url(#clip-path)">
                                        <path id="Path_3262" data-name="Path 3262" d="M176.69,180.36A37.734,37.734,0,0,0,139.2,217.821v229.1a37.734,37.734,0,0,0,37.488,37.461H406.31L520.8,568.726a14.8,14.8,0,0,0,23.617-11.91V484.378h30.9A37.734,37.734,0,0,0,612.8,446.917v-229.1a37.734,37.734,0,0,0-37.488-37.461Zm87.293,88.273c.5-.023,1-.023,1.5,0H412.553a14.8,14.8,0,1,1,0,29.6H265.487a14.824,14.824,0,0,1-1.5-29.6Zm1.5,71.426H486.6a14.815,14.815,0,0,1,0,29.629H265.483a14.815,14.815,0,0,1,0-29.629Z" fill="#7e7e7e" />
                                    </g>
                                </svg>
                                <span>Enquiry</span>
                            </div>
                        </div>
                    </div>
                </div>
            }) : <></>
        }
    </section >;
};

const mapStateToProps = (state) => ({
    companyList: state.companyList || [],
});

export default connect(mapStateToProps)(CompanyList);
