import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import ExamsPage from "./pages/Exams";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import NewExamPage from "./pages/NewExam";
import ExamDetailPage from "./pages/DetailPage";
import EditExamPage from "./pages/editExam";
import ExamsLayout from './pages/ExamRoot'
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "exams",
    
        children: [
          {
            index: true,
            element: <ExamsPage />,
          },
          {
            path: ":examId",
            element: <ExamsLayout />,
            children: [
              {
                index: true,
                element: <ExamDetailPage />,
              },
              {
                path: "update",
                element: <EditExamPage />,
              },
          
            ],
          },
          
          {
            path: "new",
            element: <NewExamPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
