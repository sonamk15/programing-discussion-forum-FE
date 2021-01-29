import "./modal.css";
import { Category } from "../../../constant";

function Modal({ handleClose, show, addQuery, handelChange, category, query_text }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <select name="category" value={category} className="queri-raiser-dropdown" onChange={handelChange}>
            {Category.map((topic, idx) => (
              <option key={idx} value={topic}>{topic}</option>
            ))}
          </select>
          <textarea name="query_text" value={query_text} className="texarea" style={{ width: '30%', borderRadius: '5px' }} placeholder='Ask Your query'
            onChange={handelChange}>
          </textarea>

          <button className="button-style" type='submit' onClick={addQuery}>Post</button>
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
}

export default Modal;