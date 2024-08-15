import { classNames } from "shared/libs";
import css from "./Completed.module.scss";
import { CompletedTodosList } from "../completed-todos-list/CompletedTodosList.tsx";

interface CompletedProps {
	className?: string,
}

const Completed = ({ className }: CompletedProps) => {
    const a = "";
    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <CompletedTodosList/>
        </div>
    );
};

export default Completed;
