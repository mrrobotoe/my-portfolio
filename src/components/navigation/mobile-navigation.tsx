import React from 'react';
import {
  Button,
  OverlayArrow,
  Text,
  Modal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
  OverlayTriggerStateContext,
} from 'react-aria-components';
import { CgClose, CgProfile } from 'react-icons/cg';
// import { FaRobot } from 'react-icons/fa6';
import { FiSidebar } from 'react-icons/fi';
import { GrAction } from 'react-icons/gr';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { useOnClickOutside } from 'usehooks-ts';
import './mobile-navigation.styles.scss';

export const MobileNavigation = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState('home');
  const sideBarRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setExpanded(false);
  };

  useOnClickOutside(sideBarRef, handleClickOutside);

  const DialogButton = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const state = React.useContext(OverlayTriggerStateContext)!;
    return (
      <Button
        className={[className, 'mobile-navigation__list__links__link-btn'].join(
          ' ',
        )}
        // data-active-btn={active === 'logo'}
        onPress={() => state.toggle()}
      >
        {children}
      </Button>
    );
  };

  return (
    <DialogTrigger>
      <nav className="mobile-navigation" data-nav-expand={expanded}>
        <div className="mobile-navigation__top-bar">
          <div className="mobile-navigation__list__logo">
            <DialogButton className="logo-btn">
              <FiSidebar />
            </DialogButton>
          </div>
          <div className="mobile-navigation__profile-icon">
            <div className="mobile-navigation__profile-icon__link">
              <CgProfile />
            </div>
          </div>
        </div>
        <ModalOverlay
          isDismissable
          className={({ isEntering, isExiting }) => `
          mobile-navigation__modal-overlay backdrop-blur-sm translate-x-0
          ${isEntering ? 'is-entering-overlay translate-x-100 animate-slide-in-left fade-in animate-in duration-300 ease-out' : ''}
          ${isExiting ? 'animate-slide-in-right animate-out duration-200 ease-in' : ''}
        `}
        >
          <Modal
            className={({ isEntering, isExiting }) => `
            mobile-navigation__modal
            ${isEntering ? 'is-entering' : ''}
            ${isExiting ? 'is-exiting' : ''}`}
          >
            <Dialog className="mobile-navigation__dialog">
              <div
                ref={sideBarRef}
                data-nav-expand={expanded}
                data-type="list"
                className="mobile-navigation__list"
              >
                <div
                  data-nav-expand={expanded}
                  className="mobile-navigation__list__links"
                >
                  <DialogButton className="close-btn">
                    <CgClose />
                  </DialogButton>
                  <Button
                    className="mobile-navigation__list__links__link-btn"
                    data-active-btn={active === 'home'}
                    data-nav-expand={expanded}
                    onPress={() => setActive('home')}
                  >
                    <IoHomeOutline className="icons" />
                    <Text>Home</Text>
                  </Button>
                  <OverlayArrow>
                    <svg width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0 0 L4 4 L8 0" />
                    </svg>
                  </OverlayArrow>
                  <Button
                    className="mobile-navigation__list__links__link-btn"
                    data-active-btn={active === 'about'}
                    data-nav-expand={expanded}
                    onPress={() => setActive('about')}
                  >
                    <GrAction className="icons" />
                    <Text>About</Text>
                  </Button>
                  <OverlayArrow>
                    <svg width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0 0 L4 4 L8 0" />
                    </svg>
                  </OverlayArrow>
                  <Button
                    className="mobile-navigation__list__links__link-btn"
                    data-active-btn={active === 'settings'}
                    data-nav-expand={expanded}
                    onPress={() => setActive('settings')}
                  >
                    <IoSettingsOutline className="icons" />
                    <Text>Settings</Text>
                  </Button>
                  <OverlayArrow>
                    <svg width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0 0 L4 4 L8 0" />
                    </svg>
                  </OverlayArrow>
                </div>
              </div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </nav>
    </DialogTrigger>
  );
};
