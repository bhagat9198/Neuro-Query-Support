import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";
import "./assets/css/loader.css";

import Auth from "./views/auth/Auth";
import { Suspense, useEffect, useState } from "react";
import Error from "./views/Error";
import HomeMentor from "./views/mentor/Home";
import { socket } from "./socket";
import QueryPage from "./views/student/QueryPage/QueryPage";

const loading = <div className="wobbling"></div>;

const theme = createTheme({
  palette: {
    primary: {
      main: "#497984",
    },
    secondary: {
      main: green[500],
    },
  },
});

// function getParams({ location }) {
//   let queryParams = (location.search.split('?')[1])
//   // console.log('App :: getParams :: queryParams :: ', queryParams);
//   if (!queryParams) {
//     return {
//       status: false,
//       message: 'Url doesnt have params'
//     }
//   }
//   queryParams = queryParams.split('&');
//   for (let i = 0; i < queryParams.length; i++) {
//     // console.log('App :: getParams :: queryParams[i] :: ', queryParams[i]);
//     const query = queryParams[i].split('=');
//     if (query[0] === 'user') {
//       const userNumber = Number(query[1]);
//       return {
//         status: true,
//         message: userNumber
//       }
//     }
//   }
//   return {
//     status: false,
//     message: 'Url params doesnt have user number'
//   }
// }

function getUserType({ currentPage }) {
  if (currentPage.toLocaleLowerCase() === "admin") {
    return {
      isAdmin: true,
      isMentor: false,
      isStudent: false,
    };
  } else if (currentPage.toLocaleLowerCase() === "mentor") {
    return {
      isAdmin: false,
      isMentor: true,
      isStudent: false,
    };
  } else if (currentPage.toLocaleLowerCase() === "student") {
    return {
      isAdmin: false,
      isMentor: false,
      isStudent: true,
    };
  } else {
    return {
      isAdmin: false,
      isMentor: false,
      isStudent: false,
    };
  }
}

function App() {
  const [userType, setUserType] = useState(null);
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];
  console.log("App :: currentPage :: ", currentPage);
  useEffect(() => {
    const uType = getUserType({ currentPage });
    console.log("App :: uType :: ", uType);
    if (uType.isAdmin) {
      setUserType("admin");
    } else if (uType.isMentor) {
      setUserType("mentor");
    } else if (uType.isStudent) {
      setUserType("student");
    } else {
      setUserType(null);
    }
    // if (!uType.isAdmin && !uType.isMentor && !uType.isStudent) {

    // }

    // SOCKET
    socket.on("connection", async (data) => {
      console.log("App :: connection :: data :: ", data);
    });
  }, []);

  console.log("App :: userType ::", userType);
  // if (!userType) {

  //   return (<Routes >
  //     <Route exact path='/401' element={<Error errorCode="401" goBackBtn={false} />} />
  //   </Routes>)
  // }

  return (
    <>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      /> */}
      <ThemeProvider theme={theme}>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route
              exact
              path="/mentor"
              element={<HomeMentor userType={userType} />}
            />
            <Route exact path="/query" element={<QueryPage />} />
            <Route
              exact
              path="/404"
              element={<Error errorCode="404" goBackBtn={true} />}
            />
            <Route
              exact
              path="/500"
              element={<Error errorCode="500" goBackBtn={true} />}
            />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
