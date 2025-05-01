import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise=fetch('/categories.json').then((response)=>response.json())
const Categories = () => {
    const categories=use(categoriesPromise);
    // console.log(categories);
    return (
        <div>
            <h1 className='font-semibold text-xl'>Categories {categories.length}</h1>
            <div className='grid grid-cols-1 gap-3 mt-2'>
                {
                    categories.map((category)=> <NavLink key={category.id}
                    className='btn btn-base-200 bg-white hover:bg-accent hover:text-white text-left'
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;