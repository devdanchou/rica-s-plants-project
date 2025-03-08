import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SessionContext from "contexts/SessionContext";
import PlantListPage from "pages/PlantListPage";
import * as LocalStorageService from "services/localStorage";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    LocalStorageService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider value={{
      username: sessionToken ? jwtDecode(sessionToken).username : null,
      signIn: (token) => {
        setSessionToken(token);
        LocalStorageService.setSessionTokenStorage(token)
      },
      signOut: () => {
        setSessionToken(null);
        LocalStorageService.removeSessionTokenStorage();
      }
    }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/plants" element={<PlantListPage />} />
      </Routes>
    </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
