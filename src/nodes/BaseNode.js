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
      {/* title */}
      <div>{title}</div>

      {/* custom content */}
      {children && <div>{children}</div>}

      {/* Fields */}
      {fields && (
        <div>
          {fields.map((field) => {
            const fieldId = `${id}-${field.name}`;
            return (
              <div key={field.name}>
                <label htmlFor={fieldId}>{field.label}:</label>
                {field.type === "select" ? (
                  <select
                    id={fieldId}
                    value={values[field.name]}
                    aria-label={field.label}
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
                    id={fieldId}
                    type={field.type}
                    aria-label={field.label}
                    value={values[field.name]}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                )}{" "}
              </div>
            );
          })}
        </div>
      )}

      {/* Handles */}
      {handles &&
        handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={{ ...handle.style }}
            aria-label={`${handle.type} handle for ${title} node`}
            tabIndex={0}
          />
        ))}
    </div>
  );
};

export default BaseNode;
