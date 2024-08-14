import { classNames } from "shared/libs";
import { CreateTodoForm } from "features/create-todo";
import css from "./Home.module.scss";
import { UncompletedTodosList } from "../uncompleted-todos-list/UncompletedTodosList.tsx";

interface HomeProps {
	className?: string,
}

const Home = ({ className }: HomeProps) => {
    const a = "";

    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <CreateTodoForm/>
            <UncompletedTodosList/>
        </div>
    );
};

export default Home;
