import "./App.css";
import React, { useRef } from "react";

function Grid() {
  const gridRef = useRef([]);

  function checkRowWin(row) {
    let winScore = 0;

    const rowList = document.querySelectorAll(`[row = "${row}"]`);
    rowList.forEach((e) => {
      if (e.classList.contains("X")) {
        winScore++;
      }
    });
    if (winScore == 3) {
      console.log("WINNER");
    }
  }

  function checkColumnWin(column) {
    let winScore = 0;

    const columnList = document.querySelectorAll(`[column = "${column}"]`);
    columnList.forEach((e) => {
      if (e.classList.contains("X")) {
        winScore++;
      }
    });
    if (winScore == 3) {
      console.log("WINNER");
    }
  }

  function checkDiagonalWin(row, column) {
    let winScore = 0;

    const minGridSize = 1;
    const maxGridSize = 3;

    if (row == minGridSize && column == minGridSize) {
      for (let i = 0; i < maxGridSize; i++) {
        const element = document.querySelector(
          `[row = "${row + i}"][column = "${column + i}"]`
        );
        if (element) {
          if (element.classList.contains("X")) {
            winScore++;
          }
        }
      }
    } else if (row == minGridSize && column == maxGridSize) {
      for (let i = 0; i < maxGridSize; i++) {
        const element = document.querySelector(
          `[row = "${row + i}"][column = "${column - i}"]`
        );
        if (element) {
          if (element.classList.contains("X")) {
            winScore++;
          }
        }
      }
    } else if (row == maxGridSize && column == minGridSize) {
      for (let i = 0; i < maxGridSize; i++) {
        const element = document.querySelector(
          `[row = "${row - i}"][column = "${column + i}"]`
        );
        if (element) {
          if (element.classList.contains("X")) {
            winScore++;
          }
        }
      }
    } else if (row == maxGridSize && column == maxGridSize) {
      for (let i = 0; i < maxGridSize; i++) {
        const element = document.querySelector(
          `[row = "${row - i}"][column = "${column - i}"]`
        );
        if (element) {
          if (element.classList.contains("X")) {
            winScore++;
          }
        }
      }
    } else {
      const corner1 = { row: 1, column: 1 };
      const corner2 = { row: 3, column: 1 };
      const corner3 = { row: 1, column: 3 };
      const corner4 = { row: 3, column: 3 };
      const corner = [corner1, corner2, corner3, corner4];
      for (var i = 0; i < corner.length; i++) {
        if (checkDiagonalWin(corner[i].row, corner[i].column)) {
          return true;
        }
      }
    }
    if (winScore == 3) {
      return true;
    }
    return false;
  }

  function checkWin(index) {
    const row = parseInt(gridRef.current[index].getAttribute("row"));
    const column = parseInt(gridRef.current[index].getAttribute("column"));
    if (
      checkRowWin(row) ||
      checkColumnWin(column) ||
      checkDiagonalWin(row, column)
    ) {
      console.log("WINNER");
    }
  }

  function addXO(index) {
    if (
      gridRef.current[index].classList.contains("X") ||
      gridRef.current[index].classList.contains("O")
    )
      return;

    gridRef.current[index].classList.add("X");
    checkWin(index);
  }

  return (
    <div id="grid-Container">
      <div id="grid">
        {[...Array(9)].map((_, index) => {
          let row = Math.ceil((index + 1) / 3);
          let column = (index % 3) + 1;
          return (
            <div
              ref={(e) => (gridRef.current[index] = e)}
              onClick={() => addXO(index)}
              row={row}
              column={column}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
