import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useNotification } from '../../hooks/useNotification';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../store/user/userSlice';

export default function LoginButton() {
  const navigate = useNavigate()
  const { showNotification } = useNotification();

  const dispatch = useDispatch()

  const token = sessionStorage.getItem('token')

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
    showNotification({
        type: "info",
        description: (
          <div>
            <h2>Wylogowanie powiodło się</h2>
          </div>
        ),
        placement: 'topRight',
        duration:2
      });
      dispatch(userSlice.actions.logout())
  }

  return (
    <>
      {token && token !== '' ? (
        <Button onClick={handleLogout} type='text'>Wyloguj się</Button>
      ) : (
        <Link to="/login">Zaloguj się</Link>
      )}
    </>
  )
}
