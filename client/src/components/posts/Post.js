import './Post.module.css'
const Post=(props)=>{
  return(
    <div>
      <div>{props.post.name}</div>
      <div>{props.post.desc}</div>
    </div>
  );
}
export default Post;