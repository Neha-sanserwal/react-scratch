import React from "react";

function Box({ positionStyle, children }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        ...positionStyle,
      }}
    >
      {children}
    </div>
  );
}

const Position = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        <Box>Initial</Box>
        <Box
          positionStyle={{
            position: "static",
          }}
        >
          Static
        </Box>

        <Box>Initial</Box>
        {/* static The element is positioned according to the normal flow of the
            document. The top, right, bottom, left, and z-index properties have
            no effect. This is the default value. */}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        {/* The element is positioned according to the normal flow of the document, 
        and then offset relative to itself based on the values of top, right, bottom, and left. 
        The offset does not affect the position of any other elements; thus, the space given for the element in the page 
        layout is the same as if position were static. */}

        {/* This value creates a new stacking context when the value of z-index is not auto. Its effect on table-*-group, 
        table-row, table-column, table-cell, and table-caption elements is undefined. */}
        <Box>Initial</Box>
        <Box
          positionStyle={{
            position: "relative",
            top: "40px",
          }}
        >
          Relative
        </Box>

        <Box>Initial</Box>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "40px",
          margin: "0 auto",
          position: "initial",
        }}
      >
        {/* The element is removed from the normal document flow, and no space is created for the element in the page layout. 
        The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. 
        Its final position is determined by the values of top, right, bottom, and left.This value creates a new stacking 
        context when the value of z-index is not auto. The margins of absolutely positioned boxes do not collapse with other 
        margins. */}
        <Box>Initial</Box>
        <Box
          positionStyle={{
            position: "absolute",
            top: "40px",
            background: "green",
          }}
        >
          Absolute
        </Box>

        <Box>Initial</Box>
      </div>
      <div>
        {/* The element is removed from the normal document flow, and no space is created for the element in the page layout. 
        The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. 
        Its final position is determined by the values of top, right, bottom, and left.This value creates a new stacking 
        context when the value of z-index is not auto. The margins of absolutely positioned boxes do not collapse with other 
        margins. */}
        <Box>Initial</Box>
        <Box
          positionStyle={{
            position: "sticky",
            top: "0px",
            background: "pink",
          }}
        >
          Sticky
        </Box>
        <Box>Initial</Box>
        <Box>Initial</Box> <Box>Initial</Box> <Box>Initial</Box>{" "}
        <Box>Initial</Box> <Box>Initial</Box> <Box>Initial</Box>{" "}
        <Box>Initial</Box> <Box>Initial</Box> <Box>Initial</Box>{" "}
        <Box>Initial</Box> <Box>Initial</Box> <Box>Initial</Box>{" "}
        <Box>Initial</Box> <Box>Initial</Box> <Box>Initial</Box>{" "}
        <Box>Initial</Box>
      </div>
    </>
  );
};

export default Position;
