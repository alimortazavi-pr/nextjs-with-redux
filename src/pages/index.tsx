import { useSelector, useDispatch } from "react-redux";

//Redux
import { isLoading } from "@/store/layouts/selectors";
import { setIsLoading } from "@/store/layouts/actions";

function Index() {
  //Redux
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  function toggleLoading() {
    console.log(loading);

    dispatch(setIsLoading(!loading));
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <div className="mb-2">Loading : {`${loading}`}</div>
        <button className="btn" onClick={toggleLoading}>
          click me
        </button>
      </div>
    </div>
  );
}

export default Index;
