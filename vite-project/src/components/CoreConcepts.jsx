import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            title={conceptItem.title}
            description={conceptItem.description}
            img={conceptItem.image}
          />
        ))}

        {/* or */}
        {/* {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcepts key={conceptItem.title} {...conceptItem} />
          ))} */}

        {/* <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}
          />
          <CoreConcepts
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            img={CORE_CONCEPTS[1].image}
          />
          <CoreConcepts
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            img={CORE_CONCEPTS[2].image}
          />
          <CoreConcepts
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            img={CORE_CONCEPTS[3].image}
          /> */}
      </ul>
    </section>
  );
}
