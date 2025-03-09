import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSignedOut = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username == null) {
        navigate("/");
    }
  }, [username]);

  return props.children;
};

export default RedirectToPlantsIfSignedOut;
