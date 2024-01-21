import { spawn } from 'child_process'
import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

interface IProps extends ITarefa{
    selecionaTarefa: (tarefaSelecionada:ITarefa) =>void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: IProps){
    
    return(
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                id,
                completado
        })}>
                        <h3>
                           {tarefa}
                        </h3>
                        <span>
                            {tempo}
                        </span>
                            {completado && 
                                <span className={style.concluido} aria-label='Tarefa completada!'>
                                </span>}
                </li>
    )
}