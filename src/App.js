import './App.css';

function App() {


    return (
      <div class="wrapper">

      <div class="card" id="card">

      <h1>super</h1>
        
      <img src="https://www.gamersdecide.com/sites/default/files/authors/u156421/super.jpg" alt="Card Image" />
        
        <details>
          <summary>Description</summary>
          <p>Matthew "super" DeLisi is a retired American player who last played for San Francisco Shock. He is one of the most decorated competitive Overwatch players, being a two time Overwatch League Champion, World Cup Champion, Stage 2 Champion, May Melee Tournament Champion, Role Star, All Star and MVP Runner-Up.</p>
        </details>
        
      </div>
        
      <Button class="button-other" id="button-duplicate">Duplicate</Button>
        
      <Button class="button-other" id="button-delete">Delete</Button>
        
      <Button class="button-other" id="button-color" onClick="toggleBackground()">Toggle Background Color</Button>

      <Button class="button-other" id="button-heading" onClick="changeHeading()">Change Heading</Button>
        
      <Button class="button-other" id="button-description" onClick="toggleDescription()">Toggle Description</Button>
        
      </div>  
    );
  }

export default App;
