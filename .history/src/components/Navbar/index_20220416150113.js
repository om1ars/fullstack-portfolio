import './index.css';

import classNames from 'classnames';
import Icon from 'components/Icon';
import Monogram from 'components/Monogram';
import { tokens } from 'components/ThemeProvider/theme';
import { useAppContext, useWindowSize } from 'hooks';
import { memo, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { blurOnMouseUp } from 'utils/focus';
import { media, msToNum, numToMs } from 'utils/style';
import { reflow } from 'utils/transition';
import NavToggle from './NavToggle';
import ThemeToggle from './ThemeToggle';
import { navLinks, socialLinks } from './navData';
import { EarthSection } from 'pages/SmartSparrow/Earth';
import { ProjectSection, ProjectSectionText } from 'components/ProjectLayout';

const NavbarIcons = () => (
  <div className="navbar__nav-icons">
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        className="navbar__nav-icon-link"
        aria-label={label}
        href={url}
        onMouseUp={blurOnMouseUp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="navbar__nav-icon" icon={icon} />
      </a>
    ))}
  </div>
);

function Header(props) {
  const { menuOpen, dispatch } = useAppContext();
  const { location } = props;
  const [hashKey, setHashKey] = useState();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const handleMobileNavClick = () => {
    handleNavClick();
    if (menuOpen) dispatch({ type: 'toggleMenu' });
  };

  const isMatch = (url = '', hash = '') => {
    if (!url) return false;
    return `${url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <header className="navbar" ref={headerRef}>
      <RouterLink
        className="navbar__logo"
        to={{ pathname: '/', hash: '#intro', state: hashKey }}
        aria-label="Hamish Williams, Designer"
        onClick={handleMobileNavClick}
        onMouseUp={blurOnMouseUp}
      >
        <Monogram highlight />
      </RouterLink>
      <NavToggle onClick={() => dispatch({ type: 'toggleMenu' })} menuOpen={menuOpen} />
      <nav className="navbar__nav">
        <div className="navbar__nav-list">
          {navLinks.map(({ label, pathname, hash }) => (
            <RouterLink
              className="navbar__nav-link"
              aria-current={isMatch(pathname, hash) ? 'page' : undefined}
              onClick={handleNavClick}
              key={label}
              to={{ pathname, hash, state: hashKey }}
              onMouseUp={blurOnMouseUp}
            >
              {label}
            </RouterLink>
          ))}
        </div>
        <NavbarIcons />
      </nav>
      <Transition
        mountOnEnter
        unmountOnExit
        in={menuOpen}
        timeout={{ enter: 0, exit: msToNum(tokens.base.durationL) }}
        onEnter={reflow}
      >
        {status => (
          <nav className={`navbar__mobile-nav navbar__mobile-nav--${status}`}>
            {navLinks.map(({ label, pathname, hash }, index) => (
              <RouterLink
                className={classNames(
                  'navbar__mobile-nav-link',
                  `navbar__mobile-nav-link--${status}`
                )}
                aria-current={isMatch(pathname, hash) ? 'page' : undefined}
                key={label}
                onClick={handleMobileNavClick}
                to={{ pathname, hash, state: hashKey }}
                onMouseUp={blurOnMouseUp}
                style={{
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                }}
              >
                {label}
              </RouterLink>
            ))}
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle />}
      <ThemeProvider themeId="dark">
          <Earth
            className="spr__earth"
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            ref={earthSectionRef}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Next-generation learning experiences
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      The flexibility of the product allowed for developers to create
                      engaging interactive experiences as highly configurable plugins that
                      could then be used and manipulated by learning designers.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interactivity
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They're also able to click and drag to orbit around
                      and freely explore at any time.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Animation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
    </header>
  );
}

export default memo(Header);
