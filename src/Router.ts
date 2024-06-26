import { Home } from "./components/Home";
import { Login } from "./components/Login";


export class Router {

    private mainElement = document.getElementById('main-container');

    public hundleRequest(){
        const location = this.getRoute();
        console.log(`Handlind request for: ${location}`);
        switch (location) {
            case '/login':
                this.mainElement?.append(new Login().render());
                break;
        
            default:
                this.mainElement?.append(new Home().render());
                break;
        }

    }

    private getRoute(){
        return window.location.pathname;
    }
}