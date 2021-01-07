import React from 'react';


class Contact extends React.Component {
  handleClick = (event) => {
    console.log ("handlePageLoad function");
  };

  render() {
    return (
    	<div class="container">
	<p class="lead"> You may contact me via social media links in the navigation bar, or e-mail me at <a href="mailto:robin.bertuccelli@gmail.com">robin.bertuccelli@gmail.com</a>
    </p>
</div>
);
}
}

export default Contact;
