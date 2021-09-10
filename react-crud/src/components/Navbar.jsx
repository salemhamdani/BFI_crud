import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import Search from "./Search";
import { BrowserRouter as Router, Route , Switch, Link } from 'react-router-dom';
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import Contact from "./Contact";
import Res from './Res';
export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Router> 
      <Menu secondary>
       <Link to="/read">
       <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
       </Link> 
       <Link to="/create">
        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/contact">
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Search item={activeItem} />
      </Menu>
      <Switch>
          <Route exact path='/read' component={Read} /> 
          <Route exact path='/create'component={Create} />
          <Route path='/update' component={Update}/>
          <Route path='/contact' component={Contact} /> 
          <Route path='/search' Component={Search} />
          <Route path='/res' component={Res} />
      </Switch>
      </Router>
    )
  }
}