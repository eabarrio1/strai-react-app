import { animals } from './sourcejs/data.js';
import { getImageUrl } from './sourcejs/utils.js';

export default function Animal() {
  const listItems = animals.map(animal =>
    <div class="card" key={animal.id}>
      <div class="section-content">
        {/* image */}
        <div class="thumb-container">
          <div class="thumb">
            <img src={getImageUrl(animal)} alt={animal.name}/>
          </div>
        </div>
        {/* end image */}
        <div class="copy">
          <h3>{animal.name}</h3>
          <p>
          {' ' + animal.bio + ' '}
          </p>
        </div>
      </div>
      <div class="buttons">
        <button id="kill">Kill</button>
        <button id="save">Save</button>
      </div>
  </div>
  );
  return (
    <section id="animals">
      {listItems}
    </section>
  );
}
