import React from 'react'
import Square from './Square'

const Row = (props = {word:'', input:'', set:false, onWin:()=>{}}) => {
    const {word, input} = props;
    const blocks = [];
    const style = {
        display: 'block'
    };
    for (let i = 0; i < word.length; i++) {
        const c = i<input.length?input[i]:'';
        let bgClass = 'unset';
        if(props.set==true){
            if(input[i]==word[i]){
                bgClass = 'green';
            } else if(word.indexOf(input[i])>-1) {
                bgClass = 'yellow';
            } else {
                bgClass = 'set';
            }
        }
        blocks.push(<td key={i}><Square key={i} char={c} format={bgClass}></Square></td>)
    }

  return (
    <table style={style}>
        <tbody>
            <tr>
                {blocks}
            </tr>
        </tbody>
    </table>
  )
}

export default Row