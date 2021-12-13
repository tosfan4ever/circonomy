// import React, { useContext } from 'react';
// import { Link, Route } from 'react-router-dom';
// import { UserContext } from '../../context/userContext';
//
// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const { isLoggedIn } = useContext(UserContext);
//   // return (
//   //   <Route
//   //     {...rest}
//   //     render={(props) =>
//   //       isLoggedIn ? <Component {...props} /> :   <Link to="/" />
//   //     }
//   //   />
//   // );
//
//   const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it
//
//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <div>hello</div> : <h3>World</h3>;
//   }
//
// };
// export default PrivateRoute;