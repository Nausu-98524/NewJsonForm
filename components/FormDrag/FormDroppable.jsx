"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const FormDroppable = ({ dragData, setDragData }) => {
  const router = useRouter();
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let _dragData = [...dragData];
    const draggedItemContent = _dragData.splice(dragItem.current, 1)[0];
    _dragData.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDragData(_dragData);
  };

  const handleShowForm = () => {
    if(dragData.length === 0){
        alert("please add some filed to preview")
        return
    }
    localStorage.setItem("previewData", JSON.stringify(dragData));
    router.push("/preview");
  };

  useEffect(() => {
    localStorage.removeItem("previewData");
  }, []);

  return (
    <>
      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold text-center">Edit Mode</h3>
        <button
          onClick={() => handleShowForm()}
          className="bg-blue-500 text-white px-5 py-1 rounded-md"
        >
          Preview
        </button>
      </div>

      <hr />
      <div className="dropped-items">
        {dragData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 pt-3"
            draggable
            // Set the current dragged item index
            onDragStart={() => (dragItem.current = index)}
            // Set the index where the dragged item is hovering over
            onDragEnter={() => (dragOverItem.current = index)}
            // Handle sorting when dragging ends
            onDragEnd={handleSort}
            // Prevent default to allow dropping
            onDragOver={(e) => e.preventDefault()}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </>
  );
};

export default FormDroppable;
