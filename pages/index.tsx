import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import BlogList from '../components/BlogList'
import BlogForm from '../components/BlogForm'
import { useEffect } from 'react'

import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'

import {getPosts, reset} from "../features/posts/postSlice"

const Home: NextPage = () => {

  const router = useRouter();
  const dispatch =  useDispatch();

  const { posts, isError, isSuccess, message } = useSelector((state:{posts:{
    posts:Array<object>,
    isError: Boolean,
    isSuccess: Boolean,
    message : string
  }}) => state.posts);
  const { user } = useSelector((state:{auth:{user:string}}) => state.auth);

  useEffect(() => {
    
    if (isError || !user) { 
      if(isError) {
        alert(message);
      }

      if(!user){
        dispatch(reset())   
        router.push("/login");
      }
     
    }
    else{
      dispatch(getPosts());
    }

  }, [user]);
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Blog Posting Application" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
         <BlogForm />
         <BlogList posts={posts} />

      </main>

    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}


export default Home
