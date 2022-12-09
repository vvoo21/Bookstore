const Form = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input id="title" type="text" name="title" placeholder="Book title" />
      <input id="author" type="text" name="author" placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
