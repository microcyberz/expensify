////////// Higher order component (HOC) also called CONTAINERS and SMART COMPONENTS //////////
// == A component (HOC) that renders another component
// == Goals are
// ==== Reuse code
// ==== Render Hijacking
// ==== Prop Manipulation
// ==== Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p> 
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This info is private. Please Don't share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {(props.isAuthenticated) ? <WrappedComponent {...props} /> : <p>Please Log In To View The Info</p>}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
