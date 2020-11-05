import React from "react";
import { Col } from "../GridControl/Grid";

export default function displayProjects({name, image, alt, url, github, information}) {
    console.log(image);
    return (
        <Col size="lg-4 md-6 sm-12" className="mb-4 mt-4">
            <div className="card">
                <img src={image} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{information}</p>
                    <button type="button" className="btn btn-dark">
                    <a
                        href={url}
                        id="proj-link"
                        rel="noreferrer"
                        target="_blank"
                        >Link to Website</a
                    >
                    </button>
                    
                    <button type="button" className="btn btn-dark">
                    <a
                        href={github}
                        id="proj-link"
                        rel="noreferrer"
                        target="_blank"
                        >Link to Github Repo</a
                    >
                    </button>
                </div>
                {/* <div className="card-footer">
                    <small className="repo">
                        <a className="btn-floating btn-git" type="button" role="button"
                            href={github} target="_blank" rel="noreferrer">
                            <i className="fa fa-github" id="project-one"></i></a>
                            Github Repo
                    </small>
                </div> */}
            </div>
        </Col>
        
    )
}