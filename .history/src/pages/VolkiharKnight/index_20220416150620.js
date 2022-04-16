import { lazy, Suspense, Fragment, useMemo } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore, useRouteTransition } from 'hooks';
import { Button } from 'components/Button';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectBackground,
  ProjectHeader,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import { useTheme } from 'components/ThemeProvider';
import volkiharBackground from 'assets/volkihar-background.jpg';
import volkiharBackgroundLarge from 'assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBanner from 'assets/volkihar-banner.jpg';
import volkiharBannerLarge from 'assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharArmor from 'assets/volkihar-armor.png';
import volkiharArmorLarge from 'assets/volkihar-armor-large.png';
import volkiharArmorPlaceholder from 'assets/volkihar-armor-placeholder.png';
import volkiharBook from 'assets/volkihar-book.png';
import volkiharBookLarge from 'assets/volkihar-book-large.png';
import volkiharBookPlaceholder from 'assets/volkihar-book-placeholder.png';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import volkiharEnderalLarge from 'assets/volkihar-enderal-large.jpg';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderalLogo from 'assets/volkihar-enderal-logo.png';
import volkiharEnderalLogoLarge from 'assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharSlide1 from 'assets/volkihar-slide-1.jpg';
import volkiharSlide1Large from 'assets/volkihar-slide-1-large.jpg';
import volkiharSlide2 from 'assets/volkihar-slide-2.jpg';
import volkiharSlide2Large from 'assets/volkihar-slide-2-large.jpg';
import volkiharSlide3 from 'assets/volkihar-slide-3.jpg';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import { ReactComponent as VolkiharKnightLogo } from 'assets/volkihar-logo.svg';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';
import { EarthSection } from 'pages/SmartSparrow/Earth';

const Carousel = lazy(() => import('components/Carousel'));

const title = 'Volkihar Knight';
const description =
  'A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over 700,000 downloads across both platforms.';
const roles = ['3D Modelling', 'Texturing', 'Graphic Design'];

function ProjectVolkihar() {
  const { themeId } = useTheme();
  const { status } = useRouteTransition();
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      {(status === 'entered' || status === 'exiting') && (
        <style>{`
          .dark {
            --rgbPrimary: 240 211 150;
            --rgbAccent: 240 211 150;
          }
          .light {
            --rgbAccent: 240 211 150;
          }
        `}</style>
      )}
      <ProjectContainer className="volkihar">
        <ProjectBackground
          srcSet={`${volkiharBackground} 1000w, ${volkiharBackgroundLarge} 1600w`}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Get the mod"
          url="https://www.nexusmods.com/skyrimspecialedition/mods/4806/"
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${volkiharBook} 480w, ${volkiharBookLarge} 960w`}
              placeholder={volkiharBookPlaceholder}
              alt="A book containing a sketch depicting the logo and armor"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <Image
              srcSet={`${volkiharArmor} 400w, ${volkiharArmorLarge} 800w`}
              placeholder={volkiharArmorPlaceholder}
              alt="A 3D render of the full suit of armor."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
            />
            <div className="volkihar__text-section">
              <ProjectSectionHeading>Armor design</ProjectSectionHeading>
              <ProjectSectionText>
                As a player I noticed there weren’t any heavy armor options for the
                Volkihar faction. This kinda sucks when you’ve specialised in heavy armor
                and decide to join the faction and discover they all wear light armor.
              </ProjectSectionText>
              <ProjectSectionText>
                My solution was to create a mod that combines meshes from the Volkihar
                faction armor with heavy plate armor. The mod builds upon textures and
                meshes from the base game, so it unifies with Skyrim’s overall aesthetic.
                I combined and modified the meshes in 3DS Max. To establish a cohesive
                design across the set, I edited existing textures, and designed custom
                textures in Photoshop.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div
              className={classNames('volkihar__logo-container', {
                'volkihar__logo-container--light': themeId === 'light',
              })}
            >
              <VolkiharKnightLogo
                role="img"
                aria-label="The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Identity design</ProjectSectionHeading>
              <ProjectSectionText>
                The monogram uses custom designed typography to get the right balance of
                weight and angularity. I combined this with Trajan for the text, which is
                also used for Skyrim's game title wordmark.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className="volkihar__carousel">
            <Suspense fallback={null}>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={useMemo(
                  () => [
                    {
                      src: volkiharSlide1,
                      srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
                      alt: 'A female character wearing the black coloured armor set.',
                    },
                    {
                      src: volkiharSlide2,
                      srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
                      alt: 'A close up of the custom gauntlets design.',
                    },
                    {
                      src: volkiharSlide3,
                      srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
                      alt:
                        'A female character wielding a sword and wearing the red coloured armor.',
                    },
                  ],
                  []
                )}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 320w`}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Featured in Enderal</ProjectSectionHeading>
              <ProjectSectionText>
                I was super stoked to have my work featured in the major standalone mod
                Enderal, which won best fan creation at the game awards in 2016. Within
                the game my armor design can be found being used for the Wandering Mage
                armor set.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/"
              >
                View on Steam
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
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
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default ProjectVolkihar;
