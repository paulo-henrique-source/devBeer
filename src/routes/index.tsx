import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';

export default function Routes() {
  return (
    <BrowserRouter>
       <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id+" component={Room}  />
       </Switch>
    </BrowserRouter>
  )
}