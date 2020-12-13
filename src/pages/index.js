import Head from 'next/head'
import { useEffect, useState } from 'react'

import Header from '../components/Header';
import Card from '../components/Card';
import SmallCard from '../components/SmallCard';
import CardList from '../components/CardList';
import Main from '../components/Main';
import PageContainer from '../components/PageContainer';
import { ThemeContext, themes } from '../Context/Theme';

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
      <Head>
        <title>Frontmentor | Social Media Dashboard with Theme Switcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Main>
          <Header title="Social Media Dashboard" subtitle="Total Followers: 23,004" />
          <div>
            <CardList data={generalData} component={Card} />
            <h2>Overview - Today</h2>
            <CardList data={todayData} component={SmallCard} />
          </div>
        </Main>
      </PageContainer>
    </ThemeContext.Provider>
  )
}
