import React, { FC, useContext } from "react";
import * as I from "../../../../interfaces";
import * as A from "../actions";
import { MainContentContext } from "../Content";

interface ProgramProps {
  program: I.Program
}

const Program:FC<ProgramProps> = ({program}) => {
  const { state, dispatch } = useContext(MainContentContext);

  const onClickHandler = () => {
    dispatch({type:A.Actions.setModalData, payload:program });
  };

  return (
  <div onClick= {onClickHandler} >
    <p>{program.title}:{program.content}:{program.createdDate}</p>
  </div>)
}

const ProgramList: FC = () => {
  const { state, dispatch } = useContext(MainContentContext);

  return (
    <div className="ProgramList">
      {state.programList.map((program:I.Program)=>{
        return <Program key={`programId_${program.id}`} program={program} />
      })}
    </div>
  );
};

export default ProgramList;