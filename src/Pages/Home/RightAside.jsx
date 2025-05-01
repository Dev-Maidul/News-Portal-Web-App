import React from 'react';
import SocialLoin from '../../Layouts/SocialLoin';
import Findon from '../../Layouts/Findon';
import Qzone from '../../Layouts/Qzone';
import Advertisement from '../../Layouts/Advertisement';

const RightAside = () => {
    return (
        <div className='space-y-6'>
            <SocialLoin></SocialLoin>
            <Findon></Findon>
            <Qzone></Qzone>
            <Advertisement></Advertisement>
        </div>
    );
};

export default RightAside;