import React from 'react';
import {
  Button,
  OverlayArrow,
  Text,
  Tooltip,
  TooltipTrigger,
} from 'react-aria-components';
import { FaRobot } from 'react-icons/fa6';
import { GrAction } from 'react-icons/gr';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from 'react-icons/md';
import './navigation.scss';

export const Navigation = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState('home');

  return (
    <nav className="navigation" data-nav-expand={expanded}>
      <div data-type="list" className="navigation__list">
        <div className="navigation__list__logo">
          <Button
            data-nav-expand={expanded}
            className="navigation__list__links__link-btn logo-btn"
            data-active-btn={active === 'logo'}
            onPress={() => setActive('home')}
          >
            <FaRobot />
            {expanded && <Text>Mr Roboto</Text>}
          </Button>
        </div>

        <div data-nav-expand={expanded} className="navigation__list__links">
          <TooltipTrigger delay={0} isDisabled={expanded}>
            <Button
              className="navigation__list__links__link-btn"
              data-active-btn={active === 'home'}
              data-nav-expand={expanded}
              onPress={() => setActive('home')}
            >
              <IoHomeOutline className="icons" />
              {expanded && <Text>Home</Text>}
            </Button>
            <Tooltip placement="end">
              <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              Home
            </Tooltip>
          </TooltipTrigger>
          <TooltipTrigger delay={0} isDisabled={expanded}>
            <Button
              className="navigation__list__links__link-btn"
              data-active-btn={active === 'about'}
              data-nav-expand={expanded}
              onPress={() => setActive('about')}
            >
              <GrAction className="icons" />
              {expanded && <Text>About</Text>}
            </Button>
            <Tooltip placement="end">
              <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              About
            </Tooltip>
          </TooltipTrigger>
          <TooltipTrigger delay={0} isDisabled={expanded}>
            <Button
              className="navigation__list__links__link-btn"
              data-active-btn={active === 'settings'}
              data-nav-expand={expanded}
              onPress={() => setActive('settings')}
            >
              <IoSettingsOutline className="icons" />
              {expanded && <Text>Settings</Text>}
            </Button>
            <Tooltip placement="end">
              <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              Settings
            </Tooltip>
          </TooltipTrigger>
        </div>

        <div className="navigation__list__utils">
          <TooltipTrigger delay={0} isDisabled={expanded}>
            <Button
              onPress={() => setExpanded(!expanded)}
              className="navigation__list__expand-btn"
            >
              {!expanded ? (
                <MdKeyboardDoubleArrowRight className="icons" />
              ) : (
                <MdKeyboardDoubleArrowLeft className="icons" />
              )}
            </Button>
            <Tooltip placement="end">
              <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
                </svg>
              </OverlayArrow>
              Expand
            </Tooltip>
          </TooltipTrigger>
        </div>
      </div>
    </nav>
  );
};
