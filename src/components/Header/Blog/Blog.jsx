import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const { coverImg, id, title, author, authorImg, postedDate, readingTime ,hashtags} =
      blog;
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;