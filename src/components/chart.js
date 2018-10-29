import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'; //biblioteca JavaScript que fornece funções de utilidade para tarefas comuns de programação

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default function(props) {
    return (
        <div>
            <Sparklines width={60}  height={30} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>Average: { average(props.data) } { props.unit }</div>
        </div>
    )
}