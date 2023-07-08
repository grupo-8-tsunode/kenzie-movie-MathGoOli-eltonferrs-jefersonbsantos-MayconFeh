import { useContext } from "react";

import { UserContext } from "../../../providers/UserContext";
import { StyledDiv } from "./style";

export const UserButtons = () => {
  const { user, userLogoff } = useContext(UserContext);
  
  return (
    <StyledDiv>
        <div>
            <span className="profilePic">{user?.name[0]}</span>
            <span>{user?.name}</span>
        </div>
      <button onClick={userLogoff}>Sair</button>
    </StyledDiv>
  );
};
