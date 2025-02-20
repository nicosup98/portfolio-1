import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.filter(p=> !p.hidden).map((p, i) => {
        return (
          <BlogCard key={i}>
           { p.image && <Img src={p.image} />}

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit && <ExternalLinks href={p.visit}  target="_blank">Live Preview</ExternalLinks>}
              <ExternalLinks href={p.source}  target="_blank">Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;