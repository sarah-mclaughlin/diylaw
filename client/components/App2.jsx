import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Make my will</h1>
      <p>[insert brief explanation of what a will is]</p>
      <button><a href='/name'>Start</a></button>

      <h3>Name</h3>
      <p>Full legal name: <input name='name' /><button><a href='/name/info'>?</a></button></p>

      <h3>Executor<button><a href='/executor/info'>?</a></button></h3>
      <p>Full name of executor: <input executor='executor' /></p>
      <p>Relationship to executor: <input executor-relationship='executor-relationship' /></p>

      <h3>Substitute executor<button><a href='/sub-executor/info'>?</a></button></h3>
      <p>Full name of substitute executor: <input sub-executor='sub-executor' /></p>
      <p>Relationship to substitute executor: <input sub-executor-relationship='sub-executor-relationship' /></p>

      <h3>Specific gift(s)<button><a href='/gifts/info'>?</a></button></h3>
      <p>Item description: <input gift='gift' /><button><a href='/item/info'>?</a></button></p>
      <p>Full name of recipient: <input gift-recipient='gift-recipient' /></p>
      <p>Relationship to recipient: <input gift-recipient-relationship='gift-recipient-relationship' /></p>
      <button><a href='/add-gift'>Add gift</a></button>

      <h3>Remaining property<button><a href='/property/info'>?</a></button></h3>
      <p>Full name of recipient: <input recipient='recipient' /></p>
      <p>Relationship to recipient: <input recipient-relationship='recipient-relationship' /></p>
      <p>Share of remaining property: <input share-of-property='share-of-property' /></p>
      <button><a href='/add-recipient'>Add recipient</a></button>
      <p>Full name of substitute recipient: <input sub-recipient='sub-recipient' /></p>
      <p>Relationship to substitute executor: <input sub-recipient-relationship='sub-recipient-relationship' /></p>
      <p>Share of remaining property: <input share-of-property='share-of-property' /></p>
      <button><a href='/add-substitute-recipient'>Add substitute recipient</a></button>

      <h3>Guardian(s)<button><a href='/guardians/info'>?</a></button></h3>
      <p>Do you have children under the age of 18?</p>
      <input type="radio" name="guardians" value="yes"/> Yes
      <input type="radio" name="guardians" value="no"/> No
      <p>Full name of guardian: <input guardian='guardian' /></p>
      <p>Relationship to guardian: <input guardian-relationship='guardian-relationship' /></p>
      <button><a href='/add-gift'>Add guardian</a></button>

      <h3>Substitute guardian<button><a href='/sub-guardian/info'>?</a></button></h3>
      <p>Full name of substitute guardian: <input sub-guardian='sub-guardian' /></p>
      <p>Relationship to substitute guardian: <input sub-guardian-relationship='sub-guardian-relationship' /></p>

    </div>
  )
}

export default App