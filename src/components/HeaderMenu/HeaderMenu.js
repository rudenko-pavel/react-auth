import "./HeaderMenu.scss";

import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchMenuitems } from "../../actions";
import GoogleAuth from "../GoogleAuth";

class HeaderMenu extends Component {
  componentDidMount() {
    this.props.fetchMenuitems();
  }

  renderList() {
    return this.props.menuitems.map(menuitem => {
      return (
        <NavLink
          exact
          to={menuitem.link}
          className="ui button"
          key={menuitem.id}
          activeClassName="blue basic"
        >
          {menuitem.name}
        </NavLink>
      );
    });
  }

  render() {
    // eslint-disable-next-line max-len
    // console.log("render(menuitems)", this.props.menuitems);
    return (
      <div className="row">
        <div className="column HeaderMenu">
          <div className="ui basic buttons">{this.renderList()}</div>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // see to `src/reducers/index.js`
  return {
    menuitems: state.menuitems
  };
};

export default connect(mapStateToProps, {
  fetchMenuitems // see to `src/actions/index.js`
})(HeaderMenu);
