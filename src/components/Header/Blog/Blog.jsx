import PropTypes from 'prop-types';
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({blog, handelBookMark}) => {
    const { coverImg, id, title, author, authorImg, postedDate, readingTime ,hashtags} =
      blog;



    return (
      <div className="mb-20 ">
        <img
          className="w-full mb-8"
          src={coverImg}
          alt={`cover pictue of the item ${title}`}
        />
        <div className="flex justify-between mb-4">
          <div className="flex justify-between">
            <div className="flex">
              <img className="w-14" src={authorImg} alt="authorImg" />
              <div className="ml-6">
                <h3>{author}</h3>
                <p>{postedDate}</p>
              </div>
            </div>
          </div>
          <div>
            <span>
              {readingTime} min read{" "}
              <button onClick={() => handelBookMark(blog)}>
                <BsBookmarkStar className="text-red-500 font-bold"></BsBookmarkStar>
              </button>
            </span>
          </div>
        </div>
        <h2 className="text-3xl">{title}</h2>
        <p>
          <a href="#">{hashtags}</a>
        </p>
      </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;