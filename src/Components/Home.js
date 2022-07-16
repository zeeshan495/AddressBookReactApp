import { useDispatch, useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h2>Welcome {user}</h2>
      <h3>App is in progress. Please be patient.</h3>
      <h3>Thank You!</h3>
    </>
  );
}
export default Home;
