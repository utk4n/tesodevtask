import RightArrow from "../assets/rightArrow.svg";
import LeftArrow from "../assets/leftArrow.svg";
import NewsImg from "../assets/newsImg.png";

const TopNews = () => {
  const newsArr = [
    {
      id: 1,
      img: NewsImg,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy : "by Troy Corlson"
    },
    {
      id: 2,
      img: NewsImg,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy : "by Troy Corlson"
    },
    {
      id: 3,
      img: NewsImg,
      title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
      time: "1h ago",
      createdBy : "by Troy Corlson"
    }
  ];



  const sliderNewsRender = newsArr.map((item) => (
    <div className="top_news">
      <img src={item.img} alt="news" />
      <p>{item.title}</p>
      <p>{item.time}  ·  {item.createdBy}</p>
    </div>
  ));

  return (
    <div className="top_news_container">
      <h1>Top News</h1>
      <div className="news_slider">
        <div className="arrow">
          <img src={LeftArrow} alt="left_arrow" />
        </div>
        {sliderNewsRender}
        <div className="arrow">
          <img src={RightArrow} alt="right_arrow" />
        </div>
      </div>
    </div>
  );
};

export default TopNews;
