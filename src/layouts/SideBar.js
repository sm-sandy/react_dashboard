
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../front_assets/Logo_Image/greatpharmalogo.png'
import '../CSS/Sidebar.css'
import Modal from 'react-modal';

export default function SideBar() {

    const location = useLocation();
    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "300px",
            padding: "10px"
        },
    };


    return (
        <div className='sidebar-style'>
            <nav className="sidebar">
                <div className="sidebar-header">
                    <a style={{ width: '50%' }} href="/" className="sidebar-brand">
                        <img style={{ width: '50%' }} src={logo} alt="" srcset="" />
                    </a>
                    {/* <p>Salse</p> */}
                    <div className="sidebar-toggler not-active">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <div className="sidebar-body">
                    <ul className="nav">
                        {/* Category Start  */}
                        <li className={`nav-item ${location.pathname === "/banner" || location.pathname === "/drug-generic-name" || location.pathname === "/usual-provider" || location.pathname === "/titles" || location.pathname === "/country" || location.pathname === "/city" || location.pathname === "/designation" || location.pathname === "/drugs-category" || location.pathname === "/degree" || location.pathname === "/requisition-category" || location.pathname === "/requisition-frequency" ? "active" : ""}`}>
                            <a className="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded={`${location.pathname === "/banner" || location.pathname === "/drug-generic-name" || location.pathname === "/usual-provider" || location.pathname === "/titles" || location.pathname === "/country" || location.pathname === "/city" || location.pathname === "/designation" || location.pathname === "/suppliers-category" || location.pathname === "/degree" || location.pathname === "/requisition-category" || location.pathname === "/requisition-frequency" ? "true" : ""}`} aria-controls="emails">
                                <i className="link-icon" data-feather="anchor" />
                                <span className="link-title">Admin Setup</span>
                                <i className="link-arrow" data-feather="chevron-down" />
                            </a>
                            <div className={`collapse ${location.pathname === "/banner" || location.pathname === "/drug-generic-name" || location.pathname === "/usual-provider" || location.pathname === "/titles" || location.pathname === "/country" || location.pathname === "/city" || location.pathname === "/designation" || location.pathname === "/suppliers-category" || location.pathname === "/degree" || location.pathname === "/requisition-category" || location.pathname === "/requisition-frequency" ? "show" : ""}`} id="emails">
                                <ul className="nav sub-menu">

                                    <li className="nav-item">
                                        <Link to="/banner" className={`nav-link ${location.pathname === "/banner" ? "active" : ""}`}>Banner</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/drug-generic-name" className={`nav-link ${location.pathname === "/drug-generic-name" ? "active" : ""}`}>Generic Name</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/usual-provider" className={`nav-link ${location.pathname === "/usual-provider" ? "active" : ""}`}>Usual Provider</Link>
                                    </li>
                                  
                                </ul>
                            </div>
                        </li>

                        <li class={`nav-item ${location.pathname === "/category" || location.pathname === "/subcategory" || location.pathname === "/brand" || location.pathname === "/drugs" ? "active" : ""}`}>
                            <a class="nav-link" data-bs-toggle="collapse" href="#authPages" role="button" aria-expanded={`${location.pathname === "/category" || location.pathname === "/subcategory" || location.pathname === "/brand" || location.pathname === "/drugs" ? "true" : ""}`} aria-controls="authPages">
                                <i class="link-icon" data-feather="unlock"></i>
                                <span class="link-title">Drugs</span>
                                <i class="link-arrow" data-feather="chevron-down"></i>
                            </a>
                            <div class={`collapse ${location.pathname === "/category" || location.pathname === "/subcategory" || location.pathname === "/brand" || location.pathname === "/drugs" ? "show" : ""}`} id="authPages">
                                <ul class="nav sub-menu">
                                    <li className="nav-item">
                                        <Link to="/brand" className={`nav-link ${location.pathname === "/brand" ? "active" : ""}`}>Brand</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category" className={`nav-link ${location.pathname === "/category" ? "active" : ""}`}>Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/subcategory" className={`nav-link ${location.pathname === "/subcategory" ? "active" : ""}`}>Sub Category</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/drugs" className={`nav-link ${location.pathname === "/drugs" ? "active" : ""}`}>Drugs (Product)</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                         {/* Sidebar Footer  */}
                         <li style={{ position: 'absolute', bottom: '80px', left: '0' }} className='nav-item nav-category mx-auto'>
                            <div className="left-sidebar-bottom">
                                <div className="d-flex justify-content-center">
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        style={{ background: '#69b128', color: 'white', fontSize: '16px', border: '0' }}
                                        className="w-100 py-1 rounded-1 mx-3">Membership</button>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        style={customStyles}
                                        onRequestClose={() => setIsOpen(false)}
                                        contentLabel="Example Modal"
                                    >
                                        <div className="new-member-reg p-2">
                                           <h1>Modal</h1>
                                        </div>
                                    </Modal>
                                </div>
                                <div style={{ padding: '0 32px' }} className="d-flex justify-content-center mt-2">
                                    <h6>Great Pharma</h6>
                                    <span className='ms-2 ps-2'>( POS )</span>
                                </div>
                                <div style={{ padding: '0 32px' }} className="d-flex justify-content-center mt-3">
                                    <h6 style={{ color: '#69b128' }} className='me-lg-3 me-md-1'>Help</h6>
                                    <h6 style={{ color: '#69b128' }} className='me-lg-3 me-md-1'>Support</h6>
                                    <h6 style={{ color: '#69b128' }} className=''>Legal</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
