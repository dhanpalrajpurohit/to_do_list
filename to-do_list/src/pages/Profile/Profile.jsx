import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react';
import { useState } from 'react'
import { axiosInstance } from '../../Axios';
import {SocialLinks} from '../../component/index'
function Profile() {
    const [details, setDetails] = useState("");

    useEffect(()=>{
        axiosInstance({
            url: "accounts/profile/",
            method: "GET",
            data: details,
          }).then((response) => {
            const data = response.data;
            setDetails(data);
            console.log(data);
          })
          .catch((error) => {
            const error_msg = error.response.data;
            console.log(error_msg)
          });
    }, [])
    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src={'http://localhost:8000/'+details.profilePicture} alt="avatar"
                                        class="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 class="my-3">{details.name} <FontAwesomeIcon icon={faPenToSquare} /></h5>
                                    <p class="text-muted mb-1">{details.occupation}</p>
                                    <p class="text-muted mb-4">{details.city}, {details.state}, {details.country} </p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <button type="button" class="btn btn-primary">Follow</button>
                                        <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                            </div>
                            <SocialLinks links={[details.github_username, details.instagram_username, details.facebook_username, details.twitter_username
]}/>
                            {/* <div class="card mb-4 mb-lg-0">
                                <div class="card-body p-0">
                                    <ul class="list-group list-group-flush rounded-3">
                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i class="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                            <p class="mb-0">mdbootstrap</p>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i class="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                                            <p class="mb-0">@mdbootstrap</p>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i class="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                                            <p class="mb-0">mdbootstrap</p>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i class="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                            <p class="mb-0">mdbootstrap</p>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Full Name</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{details.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{details.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Phone</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{details.mobileNumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Mobile</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">(098) 765-4321</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Address</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{details.city}, {details.state}, {details.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card mb-4 mb-md-0">
                                        <div class="card-body">
                                            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p class="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                                            <div class="progress rounded mb-2" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="66"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card mb-4 mb-md-0">
                                        <div class="card-body">
                                            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p class="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                                            <div class="progress rounded" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                                            <div class="progress rounded mb-2" style={{ height: "5px" }}>
                                                <div class="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
