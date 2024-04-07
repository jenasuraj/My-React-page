
import { useState } from 'react';
import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES  } from './data.js';

const arr=["Important", "Foundational", "Amazing"];
let value=Math.floor( Math.random()*arr.length);

const mg=
["src/assets/react-core-concepts.png",
"src/assets/state-mgmt.png",
"src/assets/components.png", 
"src/assets/config.png",
"src/assets/jsx-ui.png"];

let val=Math.floor(Math.random()*mg.length);


function App() {
       const [SelectedTopic , setSelectedTopic] =useState();
{/**used to change the ui and mannaghe sate
 */}


 // let Tabcontent='please click a button!!'

  function handleSelect(select)
  {
    setSelectedTopic(select);
  }
  return (
   
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
         {/** <CoreConcept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />


          <CoreConcept  {...CORE_CONCEPTS[1]}/>
          <CoreConcept  {...CORE_CONCEPTS[2]}/>
          <CoreConcept  {...CORE_CONCEPTS[3]}/>
          </ul>

{/**it will takle all 3 parametre 




  alter nate of above is at below...*/}
{CORE_CONCEPTS.map( (conceptItem) =>
(
<CoreConcept key = {conceptItem.title}{...conceptItem}/>
  
 
)  )}
 {/**key is used to unique the list item */}

</ul>





      {/**      <CoreConcept
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />

         <CoreConcept
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />

        <CoreConcept
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
          */}
        
      
        </section>
        
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
         {/* to show componentrs use props 
         on the tabbutton.jsx to gain the value
         of props right over there
         
         here children is components
         this is called component conversation i.e 
         to wrap components of own components
         
         */
       
         
         
         } 
          </menu>
          {!SelectedTopic ? (
  <p>Please select a topic</p>
) : (
  <div id="tab-content">
    <h3>{EXAMPLES[SelectedTopic].title}</h3>
    <p>{EXAMPLES[SelectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[SelectedTopic].code}</code>
    </pre>
  </div>
)}
        

           {/**here the value of button clicked will be displayed}}*/}
        </section>
      </main>
    </div>
  );  
}

export default App;
