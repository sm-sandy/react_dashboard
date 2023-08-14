import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import http from "../../../http";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AddSubCategory() {

    const navigate = useNavigate();
    const [errors, setError] = useState([]);
    const [picture, setPicture] = useState([]);
    const [category, setCategory] = useState([]);
    const [form_data, setFormData] = useState({
        title : "",
        category_id : "",
        description : "",
        photo : "",
        status : "",
    });


    useEffect(() => {
        http.get('category').then(res => {
            setCategory(res.data.data);
        });
    },[]);

    const handleInput = (e) => {
        setFormData({
            ...form_data, [e.target.name]: e.target.value 
        });
    }

    const [image_error, setimage_error] = useState();
    const [imageUrl, setimageUrl] = useState();
    const handleImage = (e) => {
        e.persist();
        if (e.target.files[0].size < 2000048) {
            setPicture({ photo: e.target.files[0] })
            setimage_error(null)
        } else {
            setimage_error("File size must be less than 2 mb !")
        }
        if (e.target.files && e.target.files[0] && e.target.files[0].size < 2000048) {
            setimageUrl(URL.createObjectURL(e.target.files[0]))
        } else {
            setimage_error("File size must be less than 2 mb !")
        }

    }

    const closeImage = () => {
        setimageUrl()
        document.getElementById('photo').value = '';
    }

    const submitFormData = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', form_data.title);
        formData.append('category_id', form_data.category_id);
        formData.append('description', form_data.description);
        formData.append('status', form_data.status);
        formData.append('photo',  picture.photo);

        http.post('subcategory', formData).then(res => {
// console.log(res);
            if (res.data.status === 200) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: res.data.message,
                    timer: 2500
                  })
                navigate('/subcategory');
            }else{
                setError(res.data.errors)
            }
            
        });

    }

  
  return (
      <div className="page-content">

            <div className="custom-card patients-head ">
                <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-title">Add Sub Category
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
                                  <label htmlFor="title" className="form-label">Title</label>
                                  <input type="text" name="title" className="form-control form-control-sm" value={form_data.title} onChange={handleInput} />
                                  <span className="text-danger">{errors.title}</span>
                              </div>
                              <div class="mb-3">
                                <label for="category_id" class="form-label">Category</label>
                                <select class="form-select form-select-sm" name="category_id" id="category_id" value={form_data.category_id} onChange={handleInput} >
                                    <option selected="" disabled="">Select</option>
                                        {
                                            category.map((item) => {
                                                return (
                                                    <option value={item.id} key={item.id}>{item.title}</option>
                                                )
                                            })
                                        }
                                </select>
                                <span className="text-danger">{errors.category_id}</span>
                            </div>
                              <div className="mb-3">
                                  <label htmlFor="description" className="form-label">Description</label>
                                  <textarea name="description"  value={form_data.description} onChange={handleInput} class="form-control form-control-sm" maxlength="100" rows="4" placeholder="Description..."></textarea>
                                  <span className="text-danger">{errors.description}</span>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="photo" className="form-label">Photo
                                  </label>
                                  <input type="file" name="photo" id="photo" onChange={handleImage} className="form-control form-control-sm" accept="image/jpg,image/jpeg,image/gif,image/png" />
                                    {
                                        image_error == null ? <p className="doc_image_size">Image size must be less than 2 mb</p> : <p className="photo_size_error">{image_error}</p>
                                    }

                                    {imageUrl == null ? '' :
                                        <div className="photo_close">
                                            <img src={imageUrl} className="photo_preview_url" width="100" height="100" alt="preview image" />
                                            <i onClick={closeImage} class="far fa-times-circle"></i>
                                        </div>
                                    }
                                  <span className="text-danger">{errors.photo}</span>
                              </div>
                              <div class="mb-3">
                                <label for="status" class="form-label">Status</label>
                                <select class="form-select form-select-sm" name="status" id="status" onChange={handleInput} value={form_data.status} >
                                    <option selected="" disabled="">Select</option>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                <span className="text-danger">{errors.status}</span>
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

export default AddSubCategory
