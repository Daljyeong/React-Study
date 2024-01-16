import React, {useState} from 'react'; // useState => 동적인 값인 state를 관리하기 위한 함수

const Counter = () => {
    // num을 useState의 값인 0으로 설정해줌
    // setNumber => num에 대한 setter 함수라고 보면 됨(useState를 사용한 변수 num은 반드시 setNumber로 상태 관리를 해줘야 함)
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;