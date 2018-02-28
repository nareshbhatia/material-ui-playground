import { RouterState, RouterStore } from 'mobx-state-router';
import { AppStore } from './app.store';
import { routes } from './routes';

const notFound = new RouterState('notFound');

export class RootStore {
    appStore = new AppStore(this);
    routerStore = new RouterStore(this, routes, notFound);
}
