// desired rent paid by a tenant

import React, { Component } from 'react';
import { updateDesiredRent } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/wizards.css';

class WizardFour extends Component {
    render() {
        const { updateDesiredRent } = this.props;
        const { cancelButton, inputHeader, finishButton} = styles;

        return(
            <div className="wizard_container">
            <div className="header_container">
                <div className="header_child">
                    <div className="header_left_container">
                        <img className="house-icon" src="logo.png" alt="logo"/>
                        <span className="houser-bold">Houser</span>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="header_right_container"></div>
                </div>
            </div>
            <div className="wizard_step_container">
                <div className="wizard_subheader-container">
                    <h3>Add New Listing</h3>
                    <button style={cancelButton}>Cancel</button>
                </div>
                <div className="wizard_stepHighlight-container">
                    <span style={inputHeader}>Step 4</span>
                    <div className="highlight-container">
                        <img src="active.png" alt="step one"/>
                        <img src="active.png" alt="step two"/>
                        <img src="active.png" alt="step three"/>
                        <img src="active.png" alt="final step"/>
                    </div>
                </div>
                <div className="step_body-Container">
                    <div className="step2_input-container">
                        <h4 style={inputHeader}>Desired Rent</h4>
                        <input type="text" onChange={ (e)=> this.props.updateDesiredRent(e.target.value) }/>
                    </div>
                    <Link to="/dashboard">
                        <button className="next-step_btn" style={finishButton}>Finish Listing</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

const styles = {
    cancelButton: {
        backgroundColor: '#FEC2C2',
        fontSize: '14px',
        padding: '6px 10px 6px 10px'
    },
    
    inputHeader: {
        fontSize: '20px',
        marginBottom: '6px'
    },

    finishButton: {
        backgroundColor: '#3B5249',
        color: 'white',
        fontSize: '14px',
        marginTop: '30px',
        padding: '9px 19px 9px 19px'
    }
}

function mapStateToProps(state) {
    const { desiredRent } = state;
    return {
        desiredRent
    };
}

export default connect(mapStateToProps, { updateDesiredRent })(WizardFour); 