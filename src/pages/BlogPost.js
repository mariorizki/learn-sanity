import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../utils/client';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        _id,  
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);


  return (
    <div className="grid grid-cols-3 m-8">
      {posts &&
        posts.map((post) => (
          <div className="shadow-md" key={post._id}>
            <img src={post.mainImage.asset.url} alt="" />
            <div className="p-4">
              <p className="text-xs">
                {format(new Date(post.publishedAt), 'dd MMMM yyyy')}
              </p>
              <h1 className="font-bold">{post.title}</h1>
              <p className="text-sm leading-relaxed mt-1">
                {post.body[0].children[0].text.length > 30
                  ? `${post.body[0].children[0].text.substring(0, 50)}...`
                  : post.body[0].children[0].text}
              </p>
              <Link to={`/${post.slug.current}`}>Read Full Article</Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default BlogPost;
