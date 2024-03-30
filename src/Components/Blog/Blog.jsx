import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, posted_date, author, author_img, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-60 mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                          
                </div>
                <div>
                        <span>{reading_time} min ago</span>
                        <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><MdOutlineBookmarks /></button>
                    </div> 
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href=''>#{hashtags}       </a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;