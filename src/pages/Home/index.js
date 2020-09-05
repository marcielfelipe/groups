import React, {useState} from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const [x,setX]=useState('');
    const [y,setY]=useState('');
    const [result,setResult]=useState([]);

    const [arrayX,setArrayX]=useState([]);
    const [arrayY,setArrayY]=useState([]);
    
    function AddX(e){
        e.preventDefault();
        if(x===''){
            
        }else{
            arrayX.push(x);
            setX('');
        }
        
    }
    function AddY(e){
        e.preventDefault();
        arrayY.push(y);
        setY('');
    }
    function Union(){
        var x=arrayX;
        var y=arrayY;
        var obj = {};
        for (var i = x.length-1; i >= 0; -- i)
            obj[x[i]] = x[i];
        for (var i = y.length-1; i >= 0; -- i)
            obj[y[i]] = y[i];
        var res = []
        for (var k in obj) {
            if (obj.hasOwnProperty(k))  // <-- optional
            res.push(obj[k]);
        }
        setResult(res);
    }
    function Intersection(){
        let intersection = arrayX.filter(x => arrayY.includes(x));
        setResult(intersection);
    }
    function Different(){
        let difference = arrayX.filter(x => !arrayY.includes(x));
        setResult(difference);
    }
    function DifferentInverse(){
        let difference = arrayY.filter(y => !arrayX.includes(y));
        setResult(difference);
    }
    function DropX(){
        setArrayX([]);
    }
    function DropY(){
        setArrayY([]);
    }

    return(
        <div>
            <section className="a">
                <h2>Digite o número a ser adicionado ao conjunto A</h2>
                <input 
                    value={x}
                    onChange={e=> setX(e.target.value)}
                />
                <button onClick={AddX}>Add</button>
                <button className="button-del"onClick={DropX}>Apagar conjunto A</button>
                <ul>
                    {arrayX.map(x=>(
                        <li>{x}</li>
                ))}
                </ul>

            </section>
            
            <section className="b">
                <h2>Digite o número a ser adicionado ao conjunto B</h2>
                <input 
                    value={y}
                    onChange={e=> setY(e.target.value)}
                />
                <button onClick={AddY}>Add</button>
                <button className="button-del" onClick={DropY}>Apagar conjunto B</button>
                <ul>
                    {arrayY.map(y=>(
                        <li>{y}</li>
                    ))}

                </ul>

            </section>
            <h2 className="operation">Selecione a operação que deseja realizar:</h2>
            <button onClick={Union}>União</button>
            <button onClick={Intersection}>Interseção</button>
            <button onClick={Different}>Diferença A n B</button>
            <button onClick={DifferentInverse}>Diferença B n A</button>
            <section className="result-container">
                <h1 className="title-result">Resultado:</h1>
                <h2 className="result">{result}</h2>
            </section>            
        </div>
    );
}