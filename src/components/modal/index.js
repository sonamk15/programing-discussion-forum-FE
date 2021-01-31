import "./index.css";
import { Category } from "../../constant";

function Modal({ handleClose, show, addQuery, handelChange, category, query_text }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-content">
          <label className="label">Select Category</label>
          <select name="category" value={category} className="queri-raiser-dropdown" onChange={handelChange}>
            {Category.map((topic, idx) => (
              <option key={idx} value={topic}>{topic}</option>
            ))}
          </select>
          <textarea name="query_text" value={query_text} className="texarea" style={{ width: '30%', borderRadius: '5px' }} placeholder='Ask Your query'
            onChange={handelChange}>
          </textarea>
        </div>
        <div className="modal-button">
          <button className="btn1" type='submit' onClick={addQuery}>Post</button>
          <button type="btn2" onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
}

export default Modal;