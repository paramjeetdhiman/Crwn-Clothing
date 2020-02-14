import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux'; //HOC that lets us modified our comp. realted to redux
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

//it allows us to access the state... name can be anything...
const mapStateToProps = state => ({
  //return an object....
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

/*******
 *
 * connect and mapStateToProps used when anywhere we need properties from our reducers...
 * connect is HOC...
 *
 *
 */
