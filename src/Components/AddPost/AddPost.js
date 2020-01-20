import { addPost } from '../../reducks/reducers/postsReducer';








export default function AddPost(){

    return (
        <div>
          <h1>Add a pet</h1>
          <input name="category_name" placeholder="Animal" value={this.state.category_name} onChange={this.handleChange} />
          <input name="pet_name" placeholder="Pet Name" value={this.state.title} onChange={this.handleChange} />
          <input name="img_url" placeholder="img link" value={this.state.content} onChange={this.handleChange} />
          <button onClick={this.handleAddPost}>Add your pet!</button>
        </div>
      )
}

handleAddPost = () => {
    const { category_name, title, content } = this.state;

    const { addPost } = this.props;

    addPost({ category_name, title, content })
    this.props.history.push("/")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }