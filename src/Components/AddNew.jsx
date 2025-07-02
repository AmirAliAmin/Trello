import React, { useState } from "react";
import { addList , addCard} from "../Store/Listslice";
import { useDispatch } from "react-redux";

export default function AddNew({type,parId}) {
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false); 
  const [isError, setIsError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setIsError("Title cannot be empty!");
      return;
    }
    if (type) {
      dispatch(addCard({id:Math.random().toFixed(3), title:inputValue.trim(), parId:parId}));
      
    }else{ 

      dispatch(addList({ id: Math.random().toFixed(3), title: inputValue.trim() }));
    }
    setInputValue(""); 
    setIsAdding(false); 
    setIsError("");
  };

  const updateInput = (e) => {
    setInputValue(e.target.value);
    // if (isError) {
    //   setIsError("");
    // }
  };

  return (
    <div className="">
      {!isAdding ? (
        <button
          className="text-blue-500"
          onClick={() => setIsAdding(true)} 
        >
          + Add{type?" a card":" New"}
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={updateInput}
            className="text-black border rounded p-1 focus:outline-none"
            placeholder={type?"Add in card":"Enter title"}
          />
      
          <button type="submit" className="border px-2 py-1 bg-blue-500 text-white rounded">
            Save
          </button>
          <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="border px-2 py-1 bg-gray-300 text-black rounded"
            >
              X
            </button>
          
        </form>
      )}
      <small className="text-red-500">{isError}</small>
    </div>
  );
}
