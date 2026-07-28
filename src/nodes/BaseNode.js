import React, { useState } from "react";
import { Handle } from "reactflow";

const BaseNode = ({ id, title, fields = [], handles = [], children }) => {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {}),
  );

  const handleChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field.name]: value,
    }));
  };

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>{title}</div>
      {fields && (
        <div>
          {fields.map((field) => (
            <div key={field.name}>
              <label>{field.label}:</label>
              {field.type === "select" ? (
                <select
                  value={values[field.name]}
                  onChange={(e) => handleChange(field, e.target.value)}
                >
                  {field.options.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={values[field.name]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              )}{" "}
            </div>
          ))}
        </div>
      )}

      {handles &&
        handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={{ ...handle.style }}
          />
        ))}
    </div>
  );
};

export default BaseNode;
