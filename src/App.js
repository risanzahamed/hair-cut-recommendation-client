import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import auth from './firebase/firebase.config';
import router from './Layout/Main';
import { getUser, setUser, toogleLoading } from './Redux/features/authSlice';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }else{
        dispatch(toogleLoading())
      }
    })
  }, [])
  return (
    <div>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
