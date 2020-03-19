import React, { useState, useEffect } from 'react';
import './TranslationTool.scss'
import axios from 'axios';


const WAIT_INTERVAL = 700;

const TranslationTool = () => {

    const [value, setValue] = useState("");
    const [timer, setTimer] = useState(null);
    const [output, setOutput] = useState("");

    useEffect(() => {
        setTimer(setTimeout(translateRequest, WAIT_INTERVAL));
    }, [value]);

    const translateRequest = () => {
        if (value !== "") {
            axios.post('http://localhost:5000/translate', {
                uuid: 'ABCDEF1234',
                source: value
            })
            .then(function (response) {
                setOutput(response.data.output);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            setOutput("");
        }
    };

    const handleOnChange = (event) => {
        clearTimeout(timer);
        setValue(event.target.value);
    };

    return (
        <div className="block -purple edge--top--reverse">
            <div className="fluid-container">
                <h1>Translation tool</h1>
                <p>English to German</p>
                <form>
                    <div className="form-row pb-5 px-5">
                        <div class="col-md py-2">
                            <textarea 
                                class="form-control translate-textarea"
                                placeholder="English"
                                rows="6"
                                value={value}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div class="col-md pt-2">
                            <textarea class="form-control translate-textarea" 
                                placeholder="German"
                                rows="6"
                                value={output}
                                readOnly 
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TranslationTool;