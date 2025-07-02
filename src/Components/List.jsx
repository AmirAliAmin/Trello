import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddNew from "./AddNew";
import Card from "./Card";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { reorderList, reorderCard } from "../Store/Listslice";

export default function List() {
  const listItem = useSelector((store) => store.Listslice.List);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (type === "list") {
      dispatch(reorderList({ sourceIndex: source.index, destIndex: destination.index }));
    } else if (type === "card") {
      dispatch(
        reorderCard({
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          sourceIndex: source.index,
          destIndex: destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-wrap gap-3 p-3"
          >
            {listItem.map((list, index) => (
              <Draggable key={list.id} draggableId={list.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="bg-[#ffffff9f] h-[30%] p-3 rounded w-[31%]"
                  >
                    <h1 className="font-medium mb-3" {...provided.dragHandleProps}>
                      {list.title}
                    </h1>
                    <Droppable droppableId={list.id} type="card">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className=" p-2 mb-2 bg-gray-100 rounded"
                        >
                          {list.Children?.map((child, idx) => (
                            <Draggable key={child.id} draggableId={child.id} index={idx}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="mb-2"
                                >
                                  <Card cardInfo={child} />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <AddNew type="card" parId={list.id} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <div className="p-3 h-[10%] bg-[#F1F2F4] rounded w-1/3">
              <AddNew />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
