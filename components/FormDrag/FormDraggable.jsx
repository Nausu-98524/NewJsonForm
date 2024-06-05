"use client";
import React, { useRef, useState } from "react";
import FormDroppable from "./FormDroppable";

const FormDraggable = () => {
  const [dragData, setDragData] = useState([]);
 
  console.log(dragData, "llllllllllll");
  // Handle dragging from form to drop area
  function handleOnDrag(e, inputType) {
    e.dataTransfer.setData("inputType", inputType);
    e.dataTransfer.setData("draggedItem", e.target.outerHTML);
  }

  // Handle dropping from form to drop area
  function handleOnDrop(e) {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData("draggedItem");
    if (draggedItem !== "")
      setDragData((prevData) => [...prevData, draggedItem]);
  }

  // Handle sorting within the drop area

  return (
    <div className="flex gap-5">
      <div className="flex items-center justify-center w-1/2 p-12 border border-black">
        <div className="w-full bg-white">
          <form>
            <div
              className="mb-5 p-2 cursor-move border-dashed border-2 border-blue-600"
              draggable
              onDragStart={(e) => handleOnDrag(e, "FullName")}
            >
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "Email")}
              className="mb-5 p-2 cursor-move border-dashed border-2 border-blue-600"
            >
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "Option")}
              className="w-full mb-5 px-3 p-2 cursor-move border-dashed border-2 border-blue-600 sm:w-1/2"
            >
              <div className="mb-5">
                <label
                  htmlFor="options"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Select an Option
                </label>
                <select
                  name="options"
                  id="options"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option className="p-2" value="option1">
                    Option 1
                  </option>
                  <option className="p-2" value="option2">
                    Option 2
                  </option>
                  <option className="p-2" value="option3">
                    Option 3
                  </option>
                  <option className="p-2" value="option4">
                    Option 4
                  </option>
                </select>
              </div>
            </div>

            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "TimePicker")}
              className="w-full mb-5 p-2 cursor-move border-dashed border-2 border-blue-600 px-3 sm:w-1/2"
            >
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, "Address Details")}
              className="mb-5 pt-3 p-2 cursor-move border-dashed border-2 border-blue-600"
            >
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="area"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Area
                    </label>
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="city"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div draggable onDragStart={(e) => handleOnDrag(e, "button")}>
              <button id='button' className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 cursor-move text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        onDrop={handleOnDrop}
        onDragOver={(e) => e.preventDefault()}
        className="shadow-lg h-auto p-12 border w-1/2 border-black"
      >
        <FormDroppable dragData={dragData} setDragData={setDragData} />
      </div>
    </div>
  );
};

export default FormDraggable;
