
import React, { Component } from 'react'
import { Container, Menu, Image, Header} from 'semantic-ui-react'
import "./Nav.css";
import { Link } from "react-router-dom"

export default class Nav extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
      <Menu secondary id="NavMenu">
        <Menu.Item 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          <Link to="/" className="nav-link">  
            <Image src={require('../../assets/images/icons/orangeOnWhiteLogo.png')}  alt="Facebook" size='tiny' />
          </Link> 
           </Menu.Item> 

         <Menu.Item name='contact' 
         active={activeItem === 'contact'} 
         onClick={this.handleItemClick}>
         <Link to="/contact" className="nav-link">  Contact </Link>
         </Menu.Item>

         <Container position='center'>
        <Menu.Item name="constructModernWordLogo" position='center'>
            <Image src={require('../../assets/images/icons/constructModernWordLogo.png')} alt='constuct modern' size='large'  />       
        </Menu.Item>
        </Container>
      

        <Menu.Menu position='right'>
        	<Menu.Item name='facebookLink' active={activeItem === 'facebookLink'} onClick={this.handleItemClick} >
           <a href="https://www.facebook.com/robin.bertuccelli/" target="_blank" className="nav-link" title="Facebook"> <Image src={require('../../assets/images/icons/if_facebook.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='githubLink' active={activeItem === 'githubLink'} onClick={this.handleItemClick} >
           <a href="https://github.com/robinb242" target="_blank" className="nav-link" title="Github"> <Image src={require('../../assets/images/icons/if_social-github.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='linkedinLink' active={activeItem === 'linkedinLink'} onClick={this.handleItemClick} >
           <a href="https://www.linkedin.com/in/robin-bertuccelli/" target="_blank" className="nav-link" title="LinkedIn"> <Image src={require('../../assets/images/icons/if_linkedin.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
          <Menu.Item name='IMDBLink' active={activeItem === 'IMDBLink'} onClick={this.handleItemClick} >
           <a href="https://www.imdb.com/name/nm3031887/?ref_=fn_al_nm_1" target="_blank" className="nav-link" title="Internet Movie Database"> <Image src={require('../../assets/images/icons/if_imdb.png')}  alt="Facebook" size='mini' /> </a> 
          </Menu.Item>
        </Menu.Menu>
      </Menu>
     
    )
  }
}
