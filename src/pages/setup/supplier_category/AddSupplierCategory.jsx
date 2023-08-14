import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import http from "../../../http";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddSupplierCategory() {

    const navigate = useNavigate();
    const [errors, setError] = useState([]);
    const [form_data, setFormData] = useState({
        supplier_category_name : "",
    });

    const handleInput = (e) => {
        setFormData({
            ...form_data, [e.target.name]: e.target.value 
        });
    }

    const submitFormData = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('supplier_category_name', form_data.supplier_category_name);

        http.post('supplier-category', formData).then(res => {

            if (res.data.status === 200) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: res.data.message,
                    timer: 2500
                  })
                navigate('/suppliers-category');
            }else{
                setError(res.data.errors)
            }
            
        });

    }

  
  return (
      <div className="page-content">

            <div className="custom-card patients-head ">
                <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-title">Add Supplier Category
                <button className="btn btn-sm btn-warning float-end" onClick={()=> navigate(-1)}>
                <i class="fal fa-long-arrow-left"></i> Back</button>
                </h5>
            </div>

          <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                      <div className="card-body">
                          
                          <form onSubmit={submitFormData}>

                              <div className="mb-3">
                                  <label htmlFor="supplier_category_name" className="form-label">Supplier Category</label>
                                  <input type="text" name="supplier_category_name" className="form-control form-control-sm" value={form_data.supplier_category_name} onChange={handleInput} />
                                  <span className="text-danger">{errors.supplier_category_name}</span>
                              </div>
                              

                              <button className="btn btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                          </form>
                      </div>
                  </div>
              </div>
              
          </div>
          
      </div>

  )
}

export default AddSupplierCategory
