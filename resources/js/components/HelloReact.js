// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf.js';

export default function HelloReact() {
    return (
                <div>
                    <h3>Form</h3>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group input-group-outline my-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group input-group-outline my-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" disabled />
                                </div>
                            </div>
                        </div>
                        
                    </form>
                    <h3>PDF</h3>
                    <PDFViewer>
                        <MyDocument />
                    </PDFViewer>
                </div>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}