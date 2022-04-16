import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import Link from 'components/Link';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import prerender from 'utils/prerender';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import './index.css';
import { Table, TableCell, TableRow } from 'components/Table';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Skills | Omar Nurilloev</title>
        <meta
          name="description"
          content="A list of hardware and software I use to do my thing"
        />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader
          title="Skills and stacks"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frontend</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven't
                    looked back. I've also created{' '}
                    <Link href="https://www.figma.com/@hamish">a few plugins</Link> that
                    you can install.
                  </li>
                  <li>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven't found a non-Adobe product that's as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </li>
                  <li>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it's
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Backend</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://www.python.org/">Python</Link>{' '}
                    as my backend programming language, with the Django Rest Framework theme and PostgreSql as
                    my database of choice.
                  </li>
                  <li>
                    Chrome is my main browser for both development and general use.
                  </li>
                  <li>
                    <Link href="https://djangoproject.com/">Django</Link> is my back end
                    Python library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a Fullstack Developer.
                  </li>
                  <li>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </li>
                  <li>
                    For CSS I've used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I'm using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </li>
                  <li>
                    For Javascript animations I use{' '}
                    <Link href="https://popmotion.io/api/">Popmotion Pure 8</Link>, it's a
                    great way to add spring animations to three.js. All other animations
                    are CSS with{' '}
                    <Link href="https://reactcommunity.org/react-transition-group/">
                      React Transition Group
                    </Link>{' '}
                    for enter/exit transitions.
                  </li>
                  <li>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. Check out the{' '}
                    <Link href="https://storybook.hamishw.com">
                      storybook for this website
                    </Link>
                    .
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Skills</ProjectSectionHeading>
              <Table>
                <TableRow>
                  <TableCell>
                    <strong>Frontend stacks </strong>
                  </TableCell>
                  <TableCell>Nextjs, Reactjs, Plain Javascript</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>State management</strong>
                  </TableCell>
                  <TableCell>Redux, Redux-thunk, Redux-saga, React Context</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>UI language</strong>
                  </TableCell>
                  <TableCell>Typescript</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>UI library</strong>
                  </TableCell>
                  <TableCell>Tailwind css, Radix UI</TableCell>
                </TableRow>
                <br />
                <br />
                <br />
                <br />
                <br />
                <TableRow>
                  <TableCell>
                    <strong>Backend stacks</strong>
                  </TableCell>
                  <TableCell>Django, Django-rest-framework, PostgreSQL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Authentication</strong>
                  </TableCell>
                  <TableCell>OAuth, Cookies, JWT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Design and Dev paterns</strong>
                  </TableCell>
                  <TableCell>GOF Design Patterns, SOLID, KISS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Web Security</strong>
                  </TableCell>
                  <TableCell>HTTPS, CORS, SSL/TLS, SOA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Databases</strong>
                  </TableCell>
                  <TableCell>MySQL, PostgreSQL, SQLlite, MongoDB, Redis</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>GraphQL</strong>
                  </TableCell>
                  <TableCell>Apollo, Relay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Web Server</strong>
                  </TableCell>
                  <TableCell>Niginx, Apoche, Coddy, Web Sockets</TableCell>
                </TableRow>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Uses;
