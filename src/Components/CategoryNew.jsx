import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNew = () => {
    const {id}=useParams(); // string value
    const data=useLoaderData();
    const [categoryNews,setCategoryNews]=useState([]);
    useEffect(()=>{
        if(id=='0')
        {
            setCategoryNews(data);
            return;
        }
        else if(id=='1')
        {
            const filterNews=data.filter((news)=> news.others.is_today_pick==true);
        setCategoryNews(filterNews);
        }
        else{
            const filterNews=data.filter((news)=> news.category_id==id);
        setCategoryNews(filterNews);
        }
        
    },[data,id])
    return (
        <div>
          <h1 className='font-bold mb-4'>Total News found: {categoryNews.length}</h1>
          <div className='gird grid-cols-1 gap-3'>
          {
            categoryNews.map((news,index)=> <NewsCard news={news} key={index}></NewsCard>)
          }
          </div>
        </div>
    );
};

export default CategoryNew;