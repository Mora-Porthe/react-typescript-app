import * as React from 'react';
import './style.css';
import List from './components/List';
import Form from './components/Form';

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}
interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces',
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  },
];

export default function App() {
  const [subs, setSubs] = React.useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] =
    React.useState<AppState['newSubsNumber']>(0);

  React.useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  return (
    <div className="App">
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}
