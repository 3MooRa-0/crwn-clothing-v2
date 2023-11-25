import { Routes, Route } from "react-router-dom";

import Spinner from "./components/global/Spinner/Spinner";

//reducer related
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/user.action";

const Home = lazy(() => import("./routes/Home/Home"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Navigation = lazy(() => import("./routes/Navigation/Navigation"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const CheckOut = lazy(() => import("./routes/CheckOut/CheckOut"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
