import Bookmark from "../Bookmark/Bookmark"
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl text-center">
            <h1>Total reading time: {readingTime}</h1>
            <h2>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
     bookmarks: PropTypes.array,
     readingTime: PropTypes.number
}

export default Bookmarks;