// this is tracking states
// initiate state of every value being tracked
// export functions that affect that change 

const initialState = {
    propName: '',
    description: '',
    street: '',
    city: '',
    USstate: '',
    zip: 0,
    loanAmount: 0,
    monthlyMort: 0,
    desiredRent: 0
};

const UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
const UPDATE_DESCRIPTION = "UPDATE DESCRIPTION";
const UPDATE_STREET = "UPDATE_STREET";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORT = "UPDATE_MONTHLY_MORT";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";

function reducer( state = initialState, action ) { 
    console.log('REDUCER HIT: Action ->', action );

    switch (action.type) {
        case UPDATE_PROP_NAME:
          return Object.assign( {}, state, {propName: action.payload} );

        case UPDATE_DESCRIPTION:
          return Object.assign( {}, state, {description: action.payload} );

        case UPDATE_STREET:
          return Object.assign( {}, state, {street: action.payload} );

        case UPDATE_CITY:
          return Object.assign( {}, state, {city: action.payload} );

        case UPDATE_STATE:
          return Object.assign({}, state, {USstate: action.payload} );
        
        case UPDATE_ZIP:
          return Object.assign({}, state, {zip: action.payload} );

        case UPDATE_LOAN_AMOUNT:
          return Object.assign({}, state, {loanAmount: action.payload} );

        case UPDATE_MONTHLY_MORT: 
          return Object.assign({}, state, {monthlyMort: action.payload} );

        case UPDATE_DESIRED_RENT:
          return Object.assign({}, state, {desiredRent: action.payload} );
        
          default:
          return state
    }
};

export function updatePropName( propName ) {
    return {
      type: UPDATE_PROP_NAME,
      payload: propName
    };
};

export function updateDescription( description ) {
    return {
      type: UPDATE_DESCRIPTION,
      payload: description
    };
};

export function updateStreet( street ) {
    return {
      type: UPDATE_STREET,
      payload: street
    };
};

export function updateCity( city ) {
    return {
      type: UPDATE_CITY,
      payload: city
    };
};

export function updateState( USstate ) {
    return {
      type: UPDATE_STATE,
      payload: USstate
    };
};

export function updateZip( zip ) {
    return {
      type: UPDATE_ZIP,
      payload: zip
    };
};

export function updateLoanAmount( loanAmount ) {
    return {
      type: UPDATE_LOAN_AMOUNT,
      payload: loanAmount
    };
};

export function updateMonthlyMort( monthlyMort ) {
    return {
      type: UPDATE_MONTHLY_MORT,
      payload: monthlyMort
    };
};

export function updateDesiredRent( desiredRent ) {
    return {
      type: UPDATE_DESIRED_RENT,
      payload: desiredRent
    };
};

export default reducer;