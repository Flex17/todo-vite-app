import css from "./App.module.scss";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "./providers/router/ui/AppRouter.tsx";

function App() {

    return (
        <div className={css.wrapper}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
