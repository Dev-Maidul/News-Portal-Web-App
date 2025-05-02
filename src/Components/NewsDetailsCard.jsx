import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetailsCard = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});
  // console.log(id,data);
  useEffect(() => {
    const singleNews = data.find((news) => news.id == id);
    setNews(singleNews);
  }, [data, id]);
 
  return (
    <div className="space-y-10">
      <img className="mt-5 w-full h-[400px] object-cover rounded-2xl" src={news.
image_url} alt="" />
<h2 className="font-bold text-xl">{news.title}</h2>
<p className="text-accent">{news.details}</p>
<Link to={`/category/${news.category_id
}`} className="btn btn-secondary">All news in this Category</Link>
    </div>
  );
};

export default NewsDetailsCard;
