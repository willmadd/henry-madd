import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'
import styles from '../styles/Home.module.css'
import api from '../helpers/api'

export default function Home(props) {
  // console.log('featureImages', props.featureImages)
  return (
    // <div className={styles.container}>
      <HomePage {...props}/>
      
    // </div>
  )
}

Home.getInitialProps = async () => {
  return {
    news: await api.getPosts(),
    portfolio: await api.getPortfolio(),
    landOfLostContent: await api.getEventBySlug("the-land-of-lost-content"),
    ...await api.getPageContent('home-page')
  };
};
