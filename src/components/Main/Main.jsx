import React from 'react';
import './Main.css';

import Promo from '../Promo/Promo';
import MainSection from '../MainSection/MainSection';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  // =========== Appearance ===============================================================
  return (
    <main>
      <Promo />
      <MainSection title={'О проекте'}>
        <AboutProject></AboutProject>
      </MainSection>
      <MainSection title={'Технологии'} modification='tech'>
        <Techs />
      </MainSection>
      <MainSection title={'Студент'} modification='student'>
        <AboutMe />
      </MainSection>
      <Portfolio />
    </main>
  );
}

export default Main;
