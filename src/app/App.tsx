import "./App.scss";
import { classNames } from "shared/libs";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "./providers/router/ui/AppRouter.tsx";

function App() {

    return (
        <div className={classNames("")}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
