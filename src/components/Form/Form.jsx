import React from "react";

export default function Form() {
  return (
    <div className="form-container">
      <form>
        <label>
          Price:
          <input type="text" value="20.5" />
        </label>
        <label>
          Time:
          <input type="text" value="160:47" />
        </label>
        <label>
          Currency:
          <input type="text" value="USD" />
        </label>
      </form>
    </div>
  );
}
