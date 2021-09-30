import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postEmail, getHome, getSkills,getProject,getAbout,getBlogs,getBlogsd } from "../../urls";


export const fetchHomeData = createAsyncThunk("people/getHome", async (lang) => {
    console.log(lang);
    const res = await axios.get(`${getHome}?_locale=${lang}`)
    console.log(res)
    return res.data
})

export const fetchSkillsData = createAsyncThunk("fetchData/getSkills", async (lang) => {
    const res = await axios.get(`${getSkills}?_locale=${lang}`)
    return res.data
})

export const fetchProjectsData = createAsyncThunk("fetchData/getProjects", async (lang) => {
    const res = await axios.get(`${getProject}?_locale=${lang}`)
    return res.data
})

export const fetchAboutData = createAsyncThunk("fetchData/getAbout", async (lang) => {
    const res = await axios.get(`${getAbout}?_locale=${lang}`)
    return res.data
})

export const fetchBlogsData = createAsyncThunk("fetchData/getBlogs", async (lang) => {
    const res = await axios.get(`${getBlogs}?_locale=${lang}`)
    return res.data
})

export const postMail = createAsyncThunk("fetchData/postmail", async (senderData) => {
    await axios.post(postEmail,senderData )
})


export const peopleSlice = createSlice({
    name: "fetchData",
    initialState: {
        homeData: null,
        skillsData: null,
        projectsData: null,
        aboutData: null,
        blogsData: null,
        
        language:'tr',
        isLoading: false,
        
    },
    reducers: {
        mailData: (state, action) => {
            state.userEmailData = action.payload
        },
        langData: (state, action) => {
            state.language = action.payload
        },
        
    },
    extraReducers: {
        [fetchHomeData.fulfilled]: (state, action) => {
            state.homeData = action.payload;
            state.isLoading = true;
        },
        [fetchSkillsData.fulfilled]: (state, action) => {
            state.skillsData = action.payload;
        },
        [fetchProjectsData.fulfilled]: (state, action) => {
            state.projectsData = action.payload;
        },
        [fetchAboutData.fulfilled]: (state, action) => {
            state.aboutData = action.payload;
        },
        [fetchBlogsData.fulfilled]: (state, action) => {
            state.blogsData = action.payload;
        },
        
        [postMail.fulfilled]: (state, action) => {
            alert("Your message has been sent");
        },
        
        
    }

})

export const { mailData,langData } = peopleSlice.actions;
export default peopleSlice.reducer;