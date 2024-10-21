import BookMark from "./BookMark";



const BookMarkes = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3 p-6 ">
      <div className="bookMarkTittle p-8 border-2 border-[#6047EC] rounded-md bg-[#ddd]">
        <h3 className="text-center text-2xl text-[#6047EC] font-semibold">
          Spent time on read
        </h3>
      </div>
      <div className="mt-4 bg-[#ddd] p-4">
        <h3 className=" text-2xl font-semibold">
          Bookmarked Blogs: {bookMarks.length}
        </h3>

        <div className="text-center mt-4">
          {bookMarks.map((bookmark) => (
            <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarkes;