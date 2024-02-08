import { FC } from "react";
import { Cell, Edifice, enumEdificeType } from "05-Shared";

import "./style.css";

// create(): ReactNode {
//     const arrCells: IArrObjectCells[] = [];
//     const arrEdifice: IEdifice[] = getCacheItemArray("Edifices");
//     console.log(arrEdifice);

//     for (let i = 0; i < this.state.cellCount; i++) {
//       arrCells.push({
//         id: i,
//         cell: new Cell({ cellID: i }).create(),
//       });
//     }

//     arrEdifice.forEach((element) => {
//       console.log(element);
//       arrCells[element.idPlaceCell].cell = new Cell({
//         cellID: arrCells[element.idPlaceCell].id,
//         edifice: element,
//       }).create();
//     });

//     localStorage.setItem("Edifices", JSON.stringify(arrEdifice));

//     return (
//       <div className="main__field">
//         {arrCells.map((element) => {
//           return element.cell;
//         })}
//       </div>
//     );
//   }

export const Field: FC = () => {
  return (
    <>
      <div className="main__field">
        <Cell
          propsClassName="main__cell"
          propsContent={<Edifice typeEdifice={enumEdificeType.mineGold} />}
        />
        <Cell
          propsClassName="main__cell"
          propsContent={<Edifice typeEdifice={enumEdificeType.mineGold} />}
        />
      </div>
    </>
  );
};
