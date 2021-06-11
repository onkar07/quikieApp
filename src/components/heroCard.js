import React, { useState } from 'react'
import './css/heroCard.css'
import List from "./data";
import './css/heroCard.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
function Dr() {
  const data = List.getList();
    const getItemStyle = (isDragging, draggableStyle) => ({
        ...draggableStyle,
      });
    return (
        <>
        <div className="container heroCard text-center">
          <div className="row">
            <DragDropContext onDragEnd={(param) => {
                  const srcI = param.source.index;
                  const desI = param.destination?.index;
                  if (desI) {
                    data.splice(desI, 0, data.splice(srcI, 1)[0]);
                    List.saveList(data);
                  }
                  }}>
              <Droppable droppableId="droppable" className="drop" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                      {
                          data.map((rec,index) => (
                                  <Draggable key={rec.id} draggableId={rec.id} index={index} >
                                      {(provided, snapshot) => (
                                          <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={getItemStyle(
                                              snapshot.isDragging,
                                              provided.draggableProps.style
                                          )} className="col-lg-4 col-xl-4 col-xxl-4">
                                          
                                          <div >
                                                  <div className="card mx-auto" style={{width: "14rem"}}>
                                                      <div className="card-body">
                                                              <h5 className="card-title crdt">{rec.title}</h5><span className="heroLogo"><img src={rec.logo} alt=""></img></span>
                                                              <h3 className="text-center cardValue">{rec.val}</h3>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      )}
                                      </Draggable>
                                ))
                        }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
      </DragDropContext>
        </div>
          </div>
        </>
    )
}

export default Dr
