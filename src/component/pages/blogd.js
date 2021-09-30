import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { useParams } from 'react-router-dom';
import {fetchBlogsData, fetchBlogsdData } from '../../redux/people/peopleSlice';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { getBlogs,URL } from '../../urls';




const Blogd = () => {
  
  const {uid}= useParams();
  console.log(uid)
  const Blog = useSelector(state => state.fetchData.blogsData)
  const langD = useSelector((state) => state.fetchData.language)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  useEffect(() => { 
    dispatch(fetchBlogsData(langD));
    }, [langD]);
console.log(Blog[uid-1])
    return (
<div>
  {Blog && (
    <div>
      <article class="py-12 px-4 dark:bg-black">
  <h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold dark:text-white">{Blog[uid-1].baslik}</h1>
  <p class="text-center dark:text-white">
    <span>{Blog[uid-1].tarih}</span>
    <a class="ml-1 text-green-500 hover:underline" href="#">{Blog[uid-1].yazar}</a>
  </p><div class="max-w-3xl mx-auto">
  <img src={`${Blog[uid-1].foto.url}`} />
  </div>
  <br/>
  <div class="max-w-3xl mx-auto dark:text-white">
    <p class="mb-4">{Blog[uid-1].metin}</p>
    </div>
</article>
      </div>
  )}
</div>
    )
}
export default Blogd