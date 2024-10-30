### 5강. Components 내부의 변화하는 상태값, State

#### State(상태)
- 컴포넌트 내부의 ***변화하는 값***
- 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리해주야 함 (eg: 수량, 가격, 하트 유무)

#### useState
- 컴포넌트에서 State(상태)를 다룰 때 사용하는 함수
- `const [count, setCount] = useState(0)`
- useState 함수의 인자에는 state의 **초기값으로 세팅해줄 값**을 넣어줌
- useState 함수는 **배열**을 반환
    - **0**번 째 index에는 **state 값**
    - **1**번 째 index에는 state를 **업데이트**할 때 사용하는 **함수(setter)**
- state 값은 반드시 setter 함수로만 변경할 수 있음
- setter 함수는 state 이름 앞에 "set"을 붙여서 작성하는 것이 일반적

---

### 6강. 왜 State를 사용해야할까 (vs 일반 변수)

#### 변화하는 값을 화면에 보여줘야 할 때...
- 일반 변수와 함수를 사용해서 변경된 값을 화면에 적용할 수 없음
- state가 아닌 일반 변수는 **렌더링**을 일으킬(triggr) 수 없음
- 렌더링(Rendering): 가장 최신 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것
    - 컴포넌트는 함수, 즉 렌더링 발생 == 컴포넌트 실행 == 함수 호출
    - 함수 호출? 컴포넌트 내무에 있는 코드들이 전부 실행됨

#### Component가 회면에 그려지는 과정

1. 렌더링 발생시키기(Trigger a render)
    - 렌더링은 2가지 경우에 발생:
        - 최초 앱 실행 시(혹은 새로고침 발생): inital rendering
        - 루트 컴포넌트를 실행하는 것 (& 그의 모든 자식 컴포넌트)
        ```jsx
        const rootElement = documnet.getElemenById("root");
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
        ```

        - state 값이 변경되었을 때 (by setter 함수): re-rendering
        - state 값을 가진 컴포넌트 실행하는 것 (& 그의 모든 자식 컴포넌트)
        ```jsx
        const updateCount = (arg) => {
            setCount(count + arg);
        ```

2. 컴포넌트 렌더링 수행하기(React renders your components)

3. DOM에 변경사항 반영하기 (React commits changes to the DOM)
    - 리액트는 가장 최소한의 변경사항만 DOM에 반영하기를 원함
    - 따라서 변경된 부분만 DOM에 반영됨

4. 브라우저가 화면 다시 그리기(Painting)

#### 정리
- 변경사항이 화면에 반영되려면 렌더링이 발생해야한다.
- 렌더링을 발생시킬 수 있는 것은 State의 setter 함수이다. (일반 변수는 X)
- 따라서 값의 변화를 화면에 보여주려면 반드시 State를 사용해야한다.

---

### 7강. 다양한 타입의 State 다뤄보기 (number, boolean, string)

---

### 8강. State 배열과 객체는 이렇게 다루세요

#### 배열 및 객체 State 변경할 때:
- 다른 타입의 state와 마찬가지로 setter 함수를 사용하여 state를 업데이트 해줘야 함
- 새로운 배열 혹은 객체를 만들어서 setter 함수에 전달해줘야 함

---

### 9강. State 배열과 객체는 이렇게 다루세요

#### State Batch 처리 (일괄처리)
- 이벤트 핸들러 함수 내 state 변경 요청을 모아 일괄적으로 한 번에 state를 업데이트!
- state 업데이트 처리는 이벤트 함수의 모든 코드들이 실행되고 난 후, 가장 마지막에 수행됨.
- 고로, 업데이트된 상태값을 console.log를 출력하려면 이벤트 핸들러 함수 밖으로 빼주면 됨.