import React, { Component } from 'react';
import axios from 'axios';

class PostsThumbnails extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await axios.get('http://localhost:5000/posts').then((res) => {
      this.setState({ posts: res.data });
      console.log(this.state.posts);
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div className='row mb-3'>
            <div className='card' style={{ width: '100%' }} key={post._id}>
              <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
                <p className='class-text'>{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsThumbnails;
