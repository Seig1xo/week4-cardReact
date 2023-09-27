import './App.css';

function App() {
  function duplicateCard() {
    let card = document.querySelector(".card");
    let clonedCard = card.cloneNode(true);
    clonedCard.id = 'clonedcard';
    document.body.appendChild(clonedCard);
  }

  function deleteCard() {
    let card = document.querySelector(".card");
    let clonedCard = card.cloneNode(true);
    clonedCard.id = 'clonedcard';
    document.body.querySelector("#clonedcard").remove();
  }

  function toggleBackground() {
    let c = document.querySelector("#card");
    c.className = 'toggled' == c.className ? '' : 'toggled';
  }
  
  function changeHeading() {
    let h = document.querySelector("h1");
    if (h.innerHTML == "MTD") {
      h.innerHTML = "super";
    }
    else {
      h.innerHTML = "MTD";
    }
  }
  
  function toggleDescription() {
    const details = document.querySelector('summary');
    if (details.parentNode.getAttribute('open')) {
      details.parentNode.removeAttribute('open');
    }
    else {
      details.parentNode.setAttribute('open','open');   
    }
  }

    return (
      <div class="App">

      <div class="card" id="card">

      <h1>super</h1>
        
      <img src="https://www.gamersdecide.com/sites/default/files/authors/u156421/super.jpg" alt="Card Image" />
        
        <details>
          <summary>Description</summary>
          <p>Matthew "super" DeLisi is a retired American player who last played for San Francisco Shock. He is one of the most decorated competitive Overwatch players, being a two time Overwatch League Champion, World Cup Champion, Stage 2 Champion, May Melee Tournament Champion, Role Star, All Star and MVP Runner-Up.</p>
        </details>
        
      </div>
        
      <button class="button-other" id="button-duplicate" onClick={duplicateCard}>Duplicate</button>
        
      <button class="button-other" id="button-delete" onClick={deleteCard}>Delete</button>
        
      <button class="button-other" id="button-color" onClick={toggleBackground}>Toggle Background Color</button>

      <button class="button-other" id="button-heading" onClick={changeHeading}>Change Heading</button>
        
      <button class="button-other" id="button-description" onClick={toggleDescription}>Toggle Description</button>
        
      </div>  
    );
  }

export default App;
