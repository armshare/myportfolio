import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider /><br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>I learned about technologies range in Web Development. </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Beginner with <br/> React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Beginner with <br/> Nodejs and Databases
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size="3rem" />
       <ListContainer>
         <ListTitle>UI & UX Designer</ListTitle>
         <ListParagraph>
           Beginner with <br/> AdobeXD
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
