"use client";
import React, { useEffect, useState } from "react";

const PreviewModal = () => {
  const [previewData, setPreviewData] = useState([]);
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("previewData");
      if (data) {
        try {
          const parsedData = JSON.parse(data).map((htmlString) =>
            htmlString
              .replace(/border-dashed|border-2|border-blue-600/g, "")
              .replace(/ {2,}/g, " ")
          );
          setPreviewData(parsedData);
        } catch (error) {
          console.error("Failed to parse previewData from localStorage", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    previewData.forEach((htmlString, index) => {
      const container = document.getElementById(`preview-item-${index}`);
      if (container) {
        container.querySelectorAll("input, select").forEach((input) => {
          input.addEventListener("input", (e) => handleChange(e, index));
        });
        container.querySelectorAll("button").forEach((button) => {
          button.addEventListener("click", handleButtonClick);
        });
      }
    });
  }, [previewData]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [id]: { ...prev[id], [name]: value },
    }));
  };

  const handleButtonClick = () => {
    console.log(inputValues);
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="mx-auto w-full max-w-[750px] bg-white border border-black p-3">
        <div>
          {previewData.map((htmlString, index) => (
            <div
              key={index}
              id={`preview-item-${index}`}
              className="flex flex-col space-y-2 pt-3"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
