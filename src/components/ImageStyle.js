import React, {Component} from 'react';

class ImageStyle extends Component {
  constructor(props) {
    super();

    this.state = {span: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);

    this.setState({span: span});
  };
  
  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img 
        ref={this.imageRef}
        alt={description}
        src={urls.regular}/>
      </div>
    );
  }
}

export default ImageStyle;