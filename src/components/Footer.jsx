import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{color:'#f0f7fe'}} >
                        <div className="col-md-4 d-flex align-items-center">
                            <a className='d-none d-sm-block  d-sm-none d-md-block' style={{color:'#f0f7fe'}}><i class="fa-solid fa-a"></i></a>
                            <span className="mb-3 mb-md-0" style={{color:'#f0f7fe'}} >© 2024 Company, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a style={{color:'#f0f7fe'}} href="https://www.instagram.com/maeee.a/"> <i class="fa-brands fa-instagram"></i> </a></li>
                            <li className="ms-3"><a style={{color:'#f0f7fe'}} href="https://wa.me/0767982817"> <i class="fa-brands fa-whatsapp"></i> </a></li>
                            <li className="ms-3"><a style={{color:'#f0f7fe'}} href="https://web.snapchat.com/"><i class="fa-brands fa-snapchat"></i>  </a></li>
                        </ul>
                    </footer>
                </div>
            </>
        )
    }
}
