import React from "react";
import { Image, Container, Segment,} from 'semantic-ui-react';
import "./Home.css";
import ZillowLandSearch from '../../components/ZillowLandSearch/ZillowLandSearch';
import FeatureArticle from '../../components/FeatureArticle/FeatureArticle'
import ArticlesOne from '../../components/ArticlesOne/ArticlesOne'
{/*import ZillowWidget from '../../ components/ZillowWidget/ZillowWidget'; */}

{/* MAIN BODY*/}  
class Home extends React.Component {
  handleClick = (event) => {
    console.log ("handlePageLoad function");
  };

  render() {
    return <div>
     <Container Align ="center">
      <Image src={require('../../assets/images/icons/bannerLogo.png')} alt='constuct modern' size='large'  />
        
    </Container>

  <Segment>
   <FeatureArticle />
  </Segment>


  <Segment>
    <ArticlesOne />
  </Segment>

  <Segment>
    <ZillowLandSearch />
  </Segment>

  <Segment>
    {/* <ZillowWidget /> */}
  </Segment>

  </div>








  }
}

export default Home;

