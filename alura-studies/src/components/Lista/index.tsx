import style from "./Lista.module.scss"
import Item from "./Item";
import {ITarefa} from "../../types/tarefa"

interface IProps{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa) =>void
}

function Lista({tarefas, selecionaTarefa}:IProps){

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) =>  (
                    <Item 
                        selecionaTarefa = {selecionaTarefa}
                        key ={tarefa.id}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;