import React, { useEffect,useState } from 'react'
import './style.css'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from './redux/actions';
import swal from 'sweetalert';

import axios from "axios";




const ShowUsers = () => {
    let dispatch = useDispatch();

    const { users } = useSelector(state => state.data);

    const [res, setRes] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/join').then(res => {
            console.log(res.data);
            setRes(res.data)
            setName(res.data[0].name);
        }).catch(error => console.log(error));
    }, [])
    let userid = sessionStorage.getItem("user_id")

    let nav = useNavigate();


    useEffect(() => {

        dispatch(loadUsers());
         
    }, []);

    const handleDelete = (id) => {

        if (swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })) {  dispatch(deleteUser(id));
            

            
            

        }
       



    };
    return (
        <div>

            <div class="container-scroller">
                {/* <!-- partial:../../partials/_navbar.html --> */}
                <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row ">
                    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a class="p-5" href="/dashboard"><img src="images/TheBooksClub-logos_transparent (3).png" alt="logo" /></a>
                        {/* <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a> */}
                    </div>
                    <div class="navbar-menu-wrapper d-flex align-items-stretch">
                        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span class="mdi mdi-menu"></span>
                        </button>
                        {/* <div class="search-field d-none d-md-block">
                            <form class="d-flex align-items-center h-100" action="#">
                                <div class="input-group">
                                    <div class="input-group-prepend bg-transparent">
                                        <i class="input-group-text border-0 mdi mdi-magnify"></i>
                                    </div>
                                    <input type="text" class="form-control bg-transparent border-0" placeholder="Search projects" />
                                </div>
                            </form>
                        </div> */}
                        <ul class="navbar-nav navbar-nav-right">
                            {/* <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="nav-profile-img">
                                        <img src="assets/images/faces/face1.jpg" alt="image" />
                                        <span class="availability-status online"></span>
                                    </div>
                                    <div class="nav-profile-text">
                                        <p class="mb-1 text-black">David Greymaax</p>
                                    </div>
                                </a>
                                <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a class="dropdown-item" href="#">
                                        <i class="mdi mdi-cached me-2 text-success"></i> Activity Log </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">
                                        <i class="mdi mdi-logout me-2 text-primary"></i> Signout </a>
                                </div>
                            </li> */}
                            <li class="nav-item d-none d-lg-block full-screen-link">
                                <a class="nav-link">
                                    <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                {/* <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-email-outline"></i>
                                    <span class="count-symbol bg-warning"></span>
                                </a> */}
                                {/* <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                    <h6 class="p-3 mb-0">Messages</h6>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <img src="assets/images/faces/face4.jpg" alt="image" class="profile-pic" />
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                            <p class="text-gray mb-0"> 1 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <img src="assets/images/faces/face2.jpg" alt="image" class="profile-pic" />
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                            <p class="text-gray mb-0"> 15 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <img src="assets/images/faces/face3.jpg" alt="image" class="profile-pic" />
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                            <p class="text-gray mb-0"> 18 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <h6 class="p-3 mb-0 text-center">4 new messages</h6>
                                </div> */}
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                                    <i class="mdi mdi-bell-outline"></i>
                                    <span class="count-symbol bg-danger"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                    <h6 class="p-3 mb-0">Notifications</h6>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-success">
                                                <i class="mdi mdi-calendar"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
                                            <p class="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-warning">
                                                <i class="mdi mdi-settings"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject font-weight-normal mb-1">Settings</h6>
                                            <p class="text-gray ellipsis mb-0"> Update dashboard </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-info">
                                                <i class="mdi mdi-link-variant"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 class="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                            <p class="text-gray ellipsis mb-0"> New admin wow! </p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <h6 class="p-3 mb-0 text-center">See all notifications</h6>
                                </div>
                            </li> */}
                            <li class="nav-item nav-logout d-none d-lg-block">
                                <a class="nav-link" href="#">
                                    <i class="mdi mdi-power"></i>
                                </a>
                            </li>
                            <li class="nav-item nav-settings d-none d-lg-block">
                                <a class="nav-link" href="#">
                                    <i class="mdi mdi-format-line-spacing"></i>
                                </a>
                            </li>
                        </ul>
                        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span class="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                {/* <!-- partial --> */}
                <div class="container-fluid page-body-wrapper">
                    {/* <!-- partial:../../partials/_sidebar.html --> */}
                    <nav class="sidebar sidebar-offcanvas" id="sidebar">
                        <ul class="nav">
                            <li class="nav-item nav-profile">
                                <a href="#" class="nav-link">
                                    <div class="nav-profile-image">
                                        <img src="https://caillouetland.com/wp-content/uploads/2017/07/avatar-blank.png" alt="profile" />
                                        <span class="login-status online"></span>
                                        {/* <!--change to offline or busy as needed--> */}
                                    </div>
                                    <div class="nav-profile-text d-flex flex-column">
                                        <span class="font-weight-bold mb-2">{name}</span>
                                        <span class="text-secondary text-small">Admin</span>
                                    </div>
                                    <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../dashboard">
                                    <span class="menu-title">Dashboard</span>
                                    <i class="mdi mdi-home menu-icon"></i>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                    <span class="menu-title">Basic UI Elements</span>
                                    <i class="menu-arrow"></i>
                                    <i class="mdi mdi-crosshairs-gps menu-icon"></i>
                                </a>
                                <div class="collapse" id="ui-basic">
                                    <ul class="nav flex-column sub-menu">
                                        <li class="nav-item"> <a class="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a></li>
                                        <li class="nav-item"> <a class="nav-link" href="../../pages/ui-features/typography.html">Typography</a></li>
                                    </ul>
                                </div>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="../Users">
                                    <span class="menu-title">Users</span>
                                    <i class="mdi mdi-contacts menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../Posts">
                                    <span class="menu-title">Posts</span>
                                    <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../comments">
                                    <span class="menu-title">Comments</span>
                                    <i class="mdi mdi-comment menu-icon"></i>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="">
                                    <span class="menu-title">Tables</span>
                                    <i class="mdi mdi-table-large menu-icon"></i>
                                </a>
                            </li> */}
                            {/* <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                                    <span class="menu-title">Sample Pages</span>
                                    <i class="menu-arrow"></i>
                                    <i class="mdi mdi-medical-bag menu-icon"></i>
                                </a>
                                <div class="collapse" id="general-pages">
                                    <ul class="nav flex-column sub-menu">
                                        <li class="nav-item"> <a class="nav-link" href="../../pages/samples/login.html"> Login </a></li>
                                        <li class="nav-item"> <a class="nav-link" href="../../pages/samples/register.html"> Register </a></li>
                                        
                                    </ul>
                                </div>
                            </li> */}
                            {/* <li class="nav-item sidebar-actions">
                                <span class="nav-link">
                                    <div class="border-bottom">
                                        <h6 class="font-weight-normal mb-3">Projects</h6>
                                    </div>
                                    <button class="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
                                    <div class="mt-4">
                                        <div class="border-bottom">
                                            <p class="text-secondary">Categories</p>
                                        </div>
                                        <ul class="gradient-bullet-list mt-4">
                                            <li>Free</li>
                                            <li>Pro</li>
                                        </ul>
                                    </div>
                                </span>
                            </li> */}
                        </ul>
                    </nav>
                    {/* <!-- partial --> */}
                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="page-header">
                                <h2 class="page-title"> Users </h2>
                                <nav aria-label="breadcrumb">
                                    <button type="button" class="btn btn-gradient-primary btn-fw" onClick={() => { nav('/addUser') }}>Add User</button>

                                </nav>
                            </div>
                            <div class="row">

                                <div class="col-lg-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            {/* <h4 class="card-title">Hoverable Table</h4> */}
                                            {/* <p class="card-description"> Add class <code>.table-hover</code>
                                            </p>
                                             */}
                                            <table class="table table-hover text-center">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>User Name</th>
                                                        <th>Email</th>
                                                        <th>Image</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users && users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td> {user.name}</td>
                                                            <td> {user.email}</td>
                                                            <td> <img src={`http://127.0.0.1:8000/img/${user.image}`} alt="" /></td>
                                                            <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(user.id) }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content-wrapper ends --> */}
                        {/* <!-- partial:../../partials/_footer.html --> */}
                        {/* <footer class="footer">
                            <div class="container-fluid d-flex justify-content-between">
                                <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © bootstrapdash.com 2021</span>
                                <span class="float-none float-sm-end mt-1 mt-sm-0 text-end"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin template</a> from Bootstrapdash.com</span>
                            </div>
                        </footer> */}
                        {/* <!-- partial --> */}
                    </div>
                    {/* <!-- main-panel ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
        </div>
    )
}

export default ShowUsers