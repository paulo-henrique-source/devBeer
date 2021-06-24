import { Link } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import './new-room.scss';

export function NewRoom() {
  // const { user } = useAuth();

  return (
    <div id="new-room">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>
          Tire as dúvidas da sua audiência em tempo-real
        </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form /*onSubmit={handleJoinRoom}*/>
            <input 
              type="text" 
              placeholder="Nome da sala"
              /*onChange={event => setRoomCode(event.target.value)}*/
              /*value={roomCode}*/
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}