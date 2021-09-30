import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBlogsData } from '../../redux/people/peopleSlice';
import { URL } from '../../urls';

  
const Blogs = () => {
  const Blog = useSelector(state => state.fetchData.blogsData)
  const langD = useSelector((state) => state.fetchData.language)
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  
  useEffect(() => { 
    dispatch(fetchBlogsData(langD));
    }, [langD]);

  if (!Blog) return null;
  return (
    <div className="dark:bg-black">
      
        
      
        
  <div class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-white">Blog</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      
      
{Blog.map(blog =>{ console.log(blog.foto.url) 
      return (
      
        <div class="xl:w-1/3 md:w-1/2 p-4 w-full">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`${blog.foto.url}`} alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{blog.yazar} &nbsp; {blog.tarih}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{blog.baslik}</h2>
          <p class="leading-relaxed text-base">{blog.metin.substring(0,200)}...</p>
          <Link to={`/details/${blog.uid}`}> 
          <button
        type="button"
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >
        Devamını oku !
      </button></Link>
        </div>
      </div>
      
      
      
    
  


    )})}</div>
  </div></div>
  );
};
  
export default Blogs;