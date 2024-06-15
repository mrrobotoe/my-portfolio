import { Button, Link } from 'react-aria-components';
import { FaGithub } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { Head } from '@/components/seo/head';

import './landing.styles.scss';

export const LandingRoute = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth/login');
  };

  return (
    <>
      <Head description="Landing page" title="Landing Page" />
      <main className="landing_page">
        <section className="landing_page__container">
          <h1 className="landing_page__container__header">My Portfolio</h1>
          <span className="landing_page__container__logo">
            <RiRobot2Line className="icons" />
          </span>
          <span className="landing_page__container__subtitle">
            Showcasing portfolio and skills
          </span>
          <div className="landing_page__container__btns_container">
            <Button
              onPress={handleGetStarted}
              className="react-aria-Button landing_page__container__btns_container__btn"
            >
              <IoHomeOutline className="icons" />
              <span>Get Started</span>
            </Button>
            <Link
              href="https://github.com/mrrobotoe"
              className="react-aria-Button landing_page__container__btns_container__btn__github"
              target="_blank"
            >
              <FaGithub className="icons" />
              <span>My Repo</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
