import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

// Define the props interface for the Controls component
const Controls: React.FC = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

const Example: React.FC = () => {
  return (
    <TransformWrapper
      initialScale={1}
      centerOnInit={true}
      wheel={{
        disabled:true
      }}
      onTransformed={(ref, event) => console.log(event)}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <Controls />
          <TransformComponent contentStyle={{
            width: "100%"
          }}
          wrapperStyle={{
            width: "100%"
          }}>
            <img className="w-[1280] mx-auto" src="https://gitlab.com/ImJustNon/openport-assets/-/raw/main/Non/CU/CEDT/1.png" alt="test" />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default Example;
