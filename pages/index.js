import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Switcher from '../components/Switcher';
import Card from '../components/Card';
import SmallCard from '../components/SmallCard';
import CardList from '../components/CardList';
import { ThemeContext, themes } from '../src/Context/Theme';

export default function Home() {

  const [theme, setTheme] = useState('dark');
  const [generalData, setGeneralData] = useState([]);
  const [todayData, setTodayData] = useState([]);
  
  useEffect(() => {
    getData()
  }, []);

  const getData = function() {
    fetch('http://localhost:3000/api/social-media-data')
      .then(result => result.json())
      .then(data => {
        setGeneralData(data.general);
        setTodayData(data.today);
      });
  };

  const currentTheme = themes[theme];

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className={styles.container} style={{ 
          background: currentTheme.containerBackground,
          color: currentTheme.containerColor
        }}>
        <Head>
          <title>Frontmentor | Social Media Dashboard with Theme Switcher</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.title}>Social Media Dashboard</h1>
              <h4 className={styles.subtitle}>Total Followers: 23,004</h4>
            </div>
            <Switcher />
          </header>
          <div className={styles.content}>
            <CardList data={generalData} component={Card} />
            <h2>Overview - Today</h2>
            <CardList data={todayData} component={SmallCard} />
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  )
}
