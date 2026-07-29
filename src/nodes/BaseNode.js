import React, { useState } from "react";
import { Handle } from "reactflow";

const BaseNode = ({
  id,
  title,
  fields = [],
  handles = [],
  children,
  icon,
  width = 220,
  color = "#6366F1",
}) => {
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
    <div className="bg-white relative rounded-md shadow-md" style={{ width }}>
      {/* title */}
      <div
        className="flex items-center gap-2 p-2 text-white rounded-t-md"
        style={{ background: color }}
      >
        {icon && (
          <span className="w-[18px] h-[18px] flex items-center justify-center">
            {icon}
          </span>
        )}
        <span>{title}</span>
      </div>

      {/* custom content */}
      <div className="flex flex-col gap-2 px-[12px] py-[10px]">
        {children}

        {/* Fields */}
        {fields && (
          <div>
            {fields.map((field) => {
              const fieldId = `${id}-${field.name}`;
              return (
                <div key={field.name} className="flex flex-col gap-[3px] p-2">
                  <label
                    htmlFor={fieldId}
                    className="text-[10px] font-bold text-label uppercase"
                  >
                    {field.label}:
                  </label>
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
      </div>
      {/* Handles */}
      {handles &&
        handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            aria-label={`${handle.type} handle for ${title} node`}
            tabIndex={0}
            style={{
              background: color,
              border: "2px solid white",
              width: 10,
              height: 10,
              boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
              ...handle.style,
            }}
          />
        ))}
    </div>
  );
};

export default BaseNode;
