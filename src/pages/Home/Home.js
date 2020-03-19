import React, { Fragment } from 'react';
import TranslationTool from '../../components/TranslationTool/TranslationTool';
import svgLogo from './logo2.svg';
import './Home.scss';

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 my-3">
                        <div className="title">The future of translation</div>
                        <div className="paragraph">
                            This tool based under a Neural Machine Translation technology will
                            help you translate English to German.
                            <br/>
                            <br/>
                            The frontend uses ReactJS to dynamically render the DOM and Bootstrap
                            to make the website responsive. The backend is written in Python using
                            Flask to easily define the API endpoints. The machine learning model was built using TensorFlow and OpenNMT.
                        </div>
                    </div>
                    <div className="col-md-6 my-4 d-none d-lg-block">
                        <img className="illustration" src={svgLogo} alt="" />
                    </div>
                </div>
            </div>
            <TranslationTool />
        </Fragment>
    );
};

export default Home;