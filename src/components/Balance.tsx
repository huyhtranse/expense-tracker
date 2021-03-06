import { FC } from 'react'
import { useAuth } from '../context/AuthContext'
import { useWallet } from '../context/WalletContext';
import { AuthContextType } from '../interface';
import Terminal from './track/Terminal'

const Balance: FC = () => {
  const { user, logout, setIsAuth } = useAuth() as AuthContextType;
  const { minus, plus } = useWallet();

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuth(false);
    } catch(err: any) {
      console.log(err.message)
    }
  }

  return (
    <section>
      <div className='balance'>
        <div className='head'>
          <div className='head-line'>
            <div className='head-line__left'>
              <h3 className='username'>{user && user.email}</h3>
              <button className='btn-logout' onClick={handleLogout}>Log out</button>
              <div className='head-line__left__right'></div>
            </div>
            <h1><span className='usd-char'>$</span>{plus - minus}</h1>
            <div className='head-line__right'></div>
          </div>
          <p className='balance-desc'>Current Balance</p>
        </div>
      </div>
      <Terminal/>
    </section>
  )
}

export default Balance