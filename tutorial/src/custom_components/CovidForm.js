import React from "react"

import "./CovidForm.css"

function CovidForm(){
    
    return(
<div class="form-style-5">
<form>
<fieldset>
<legend><span class="number">1</span> Candidate Info</legend>
<input type="text" name="field1" placeholder="Your Name *"/>
<label for="job">Metric:</label>
<select id="job" name="field4">
  <option value="fishkeeping">Confirmed</option>
  <option value="reading">Deaths</option>
  <option value="boxing">Recovered</option>
  <option value="debate">Active</option>
</select> 
<input type="radio" id="total" name="daily" value="total" checked/>
<label for="total">Daily Total</label>
<input type="radio" id="increase" name="daily" value="increase"/>
<label for="increase">Daily Increase</label>


<div class="radio-toolbar">
    <input type="radio" id="radioApple" name="radioFruit" value="apple" checked/>
    <label for="radioApple">Apple</label>

    <input type="radio" id="radioBanana" name="radioFruit" value="banana"/>
    <label for="radioBanana">Banana</label>

    <input type="radio" id="radioOrange" name="radioFruit" value="orange"/>
    <label for="radioOrange">Orange</label> 
</div>

<input type="email" name="field2" placeholder="Your Email *"/>
<textarea name="field3" placeholder="About yourself"></textarea>
</fieldset>
<fieldset>
<legend><span class="number">2</span> Additional Info</legend>
<textarea name="field3" placeholder="About Your School"></textarea>
</fieldset>
<input type="submit" value="Apply" />
</form>
</div>
        )
}

export default CovidForm