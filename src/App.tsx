import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { Deletepost } from "./pages/Deletepost";
import { Singlepage } from "./pages/Singlepage";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Todo } from "./pages/Todopage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { Loginpage } from "./pages/Loginpage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="about us" element={<Navigate to="/about" replace />} />
          <Route path="type" element={<Blogpage />} />
          <Route path="todo" element={<Todo />} />
          <Route path="type/:id" element={<Singlepage />} />
          <Route path="type/:id/edit" element={<Editpost />} />
          <Route path="type/:id/delete" element={<Deletepost />} />
          <Route
            path="type/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Loginpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
