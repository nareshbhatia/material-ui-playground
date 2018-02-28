import { action, extendObservable } from 'mobx';

export class AppStore {
    rootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;
        extendObservable(this, {
            paletteType: 'light',
            toggleTheme: action(() => {
                this.paletteType =
                    this.paletteType === 'light' ? 'dark' : 'light';
            })
        });
    }
}
