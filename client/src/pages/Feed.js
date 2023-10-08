import "./Feed.module.css";
import Post from "../components/posts/Post";
const posts = [
  {
    id: 1,
    name: "person person",
    userId: 1,
    title: "event1",
    //profile pic attribute
    desc: "alskjd alksdj laksjd lakdlkajdlkajl sdlak dlaksjdlkajsld alsdallkaj dslakjd laksdlkaj dlaksjdlakjsd lkasdl",
    //event imgae
  },
  {
    id: 2,
    name: "person person",
    userId: 2,
    title: "event2",
    //profile pic attribute
    desc: "alskjd alksdj laksjd lakdlkajdlkajl sdlak dlaksjdlkajsld alsdallkaj dslakjd laksdlkaj dlaksjdlakjsd lkasdl",
    //event imgae
  },
];
const Feed = () => {
  return (
    <div className="feed">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};
export default Feed;
