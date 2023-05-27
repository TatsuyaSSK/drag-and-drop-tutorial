import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const items = [
  {
    id: "item-0",
    content: "item 0",
  },
  {
    id: "item-1",
    content: "item 1",
  },
  {
    id: "item-2",
    content: "item 2",
  },
  {
    id: "item-3",
    content: "item 3",
  },
  {
    id: "item-4",
    content: "item 4",
  },
];

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgray",
  width: 250,
  padding: grid,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});

function App() {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
