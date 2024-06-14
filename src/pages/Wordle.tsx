import { useState } from 'react';
import { useRouteLoaderData, LoaderFunction, LayoutRouteProps, useParams} from 'react-router'
import Row from '../Components/Row';

const Wordle = (props = { trys:6})=>{
  const {trys} = props;
  const word = (useParams().word as string).toUpperCase();
  console.log(word);
  const rows = new Array<JSX.Element>();

  const [currentGuess, setCurrentGuess] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [guesses, setGuesses] = useState(['']);

  const temp : Array<string> = new Array<string>();
  for (let i = 0; i < trys; i++) {
    temp.push('');
    // rows.push(<Row key={i} word={'asdfas'} input=''></Row>)    
  }

  const validate = (input:string)=>{
    let output = '';
    for(const char of input.toUpperCase()) 
    {
      if(char>='A'&&char<='Z'){
        output = output+char;
      }
    }
    return output.substring(0,word.length);
  }

  const newGuess = (input:string)=>{
    setCurrentGuess(input);
    const wordsClone = guesses;
    wordsClone[currentRow] = input;
    
    setGuesses(wordsClone);
  }

  const onWin = (i:number)=>{
    return ()=>{
      setCurrentRow(0);
      setCurrentGuess('');
      setGuesses(['']);
      alert(`You won in ${i} tries!`);
    };
  };

  const enterPress = (e:React.KeyboardEvent)=>{
    if(e.key=='Enter'){
      console.log('Enter Pressed!');
      if(currentGuess.length==word.length){
        if (currentGuess==word) {
          onWin(currentRow)();
        }
        setCurrentRow(currentRow+1);
        setCurrentGuess('');
      }
    }    
  }

  for (let i = 0; i < trys; i++) {
    rows.push(<Row word={word.toUpperCase()} key={i} input={guesses[i]??''} onWin={onWin(i)} set={i<currentRow}></Row>);
  }

  return <div>
    <h4>Wordler - {word}</h4>
    {/* {words.map((val,index)=>{ return <Row word={word} key={index} input={val}></Row>})} */
      rows
    }
    <br/>
    <input type='text' value={currentGuess} onChange={(e)=>newGuess(validate(e.target.value))} onKeyDown={(e)=>enterPress(e)}/>
  </div>
}
export default Wordle