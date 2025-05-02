import React from 'react';
import Header from '../../Components/Header';
import Findon from '../../Layouts/Findon';
import Qzone from '../../Layouts/Qzone';
import NewsDetailsCard from '../../Components/NewsDetailsCard';

const NewsDetails = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <main className='grid gap-5 grid-cols-12'>
                <div className="news-details col-span-9">
                    <h1 className='font-bold text-2xl'>News Details</h1>
                    <NewsDetailsCard></NewsDetailsCard>
                </div>
                <aside className='col-span-3 space-y-8'>
                    <Findon></Findon>
                    <Qzone></Qzone>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;