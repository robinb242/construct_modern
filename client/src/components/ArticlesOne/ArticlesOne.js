import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import "./ArticlesOne.css"

const ArticlesOne = () => (
  <div>
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://via.placeholder.com/330x150' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://via.placeholder.com/330x150' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://via.placeholder.com/330x150' />
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Grid celled>
    <Grid.Row>
       <Grid.Column width={12}>
        <Image src= 'https://via.placeholder.com/700x150' />
       </Grid.Column>
       <Grid.Column width={4}>
       <Image src = 'https://via.placeholder.com/350X150' />
       </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width = {4}>
        <Image src = 'http://via.placeholder.com/400x150' />
      </Grid.Column>
      <Grid.Column width = {8}>
        <Image src= 'http://via.placeholder.com/600x150' />
      </Grid.Column>
      <Grid.Column width ={4}>
        <Image src= 'http://via.placeholder.com/400x150' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)
 
 export default ArticlesOne
