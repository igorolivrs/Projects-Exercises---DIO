import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operations, setOperations] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperations('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperations('+');
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperations('-');
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations('');
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperations('*');
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations('');
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperations('/');
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations('');
    }
  }

  const handleRestNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperations('%');
    }else {
      const sum = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperations('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operations !== '' && currentNumber !== '0'){
      switch(operations){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '%':
          handleRestNumbers();
          break;
          default:
            break;
      }
    }
  }


  return (
    <Container className="App">
      <Content>
       <Input value={currentNumber}/>
       <Row>
       <Button label="C" onClick={handleOnClear}/>
       <Button label="%" onClick={handleRestNumbers}/>
       <Button label="/" onClick={handleDivNumbers}/>
       </Row>
       <Row>
       <Button label="7" onClick={() => handleAddNumber('7')}/>
       <Button label="8" onClick={() => handleAddNumber('8')}/>
       <Button label="9" onClick={() => handleAddNumber('9')}/>
       <Button label="x" onClick={handleMultNumbers}/>
       </Row>
       <Row>
       <Button label="4" onClick={() => handleAddNumber('4')}/>
       <Button label="5" onClick={() => handleAddNumber('5')}/>
       <Button label="6" onClick={() => handleAddNumber('6')}/>
       <Button label="-" onClick={handleMinusNumbers}/>
       </Row>
       <Row>
       <Button label="1" onClick={() => handleAddNumber('1')}/>
       <Button label="2" onClick={() => handleAddNumber('2')}/>
       <Button label="3" onClick={() => handleAddNumber('3')}/>
       <Button label="+" onClick={handleSumNumbers}/>
       </Row>
       <Row>
       <Button label="0" onClick={() => handleAddNumber('0')}/>
       <Button label="." onClick={() => handleAddNumber('.')}/>
       <Button label="=" onClick={handleEquals}/>
       </Row>
      </Content>
    </Container>
  );
}

export default App;
