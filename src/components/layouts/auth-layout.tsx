import * as React from 'react';
import { RiRobot2Line } from 'react-icons/ri';

import { Head } from '../seo/head';

import './auth-layout.styles.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="auth_layout">
        <div className="auth_layout__header">
          <div className="auth_layout__header__logo">
            <RiRobot2Line className="icons" />
          </div>
          <h2 className="auth_layout__title">{title}</h2>
        </div>

        <div className="auth_layout__container">
          <div className="auth_layout__form">{children}</div>
        </div>
      </div>
    </>
  );
};
