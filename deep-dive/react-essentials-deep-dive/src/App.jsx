import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data'; // Named (not default) exports should be imported with {} syntax
import TabButton from './components/TabButton';

const App = function () {
  // A react hook must be called on the top level of the component function. useState hook allows us to manage some component specific state, which is simply some data stored by React, which when changed, will trigger the component function to which the state hook belongs to to re-execute.
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = function (selectedButton) {
    // selectedButton => 'components', 'jsx', 'props','state'
    setSelectedTopic(selectedButton); // Schedules update
    // console.log(selectedTopic);
    // When the state updating function is called, react schedules the state update. Then it re-executes the component-function. So the updated value of the state will only be available after the component function executed again.
  };

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          {/* Dynamic Lists Rendering => Since JSX is capable of ouputting an array of JSX elements we could try to tranform the Array (CORE_COCEPTS) of objects to an array of JSX elements. Use map method to transform the array into JSX list */}
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
          {/* <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
             When the props name and the property name of the objects being used are same use spread operator to pass the props 
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul> */}
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* We need to listen to clicks on our custom buttons because we must handle the event in the component that also manages the data that should be changed(i.e. tha dynamic content that should be displayed in this case). We pass the function as a value to the prop (onSelct) in this case and in our custom component we're then forwarding that function to the onCLick prop.*/}
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;
