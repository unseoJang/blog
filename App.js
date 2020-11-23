/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','사랑 우정 그리고']);
  let [따봉, 따봉변경] = useState([0, 1, 2]);
  let [modal, modalChange] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState(''); 
  let posts = "강남 고기 맛집";

  function 제목변경(){
    //글제목에 있던 0번쨰 데이터를 여자코트추천으로 바꿈 reference data type 특징(검색해서 확인)
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }
  function 순서변경(){
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }
  function 따봉각자변경(){
    let 몇번째게시물 = i; 
    let copy = [...따봉];
    copy[몇번째게시물]++;
    따봉변경( copy )
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목변경 }>제목 변경 버튼</button>
      <button onClick={ 순서변경 }>가나다 정렬 버튼</button>
      <button onClick={ () =>{ modalChange(!modal) } }>모달 등장 버튼</button>
      {/* <button onClick={ () =>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ () =>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ () =>{ 누른제목변경(2) } }>버튼3</button> */}

      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) }}/>
        <button onClick={ () => { 
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
         } }>저장</button>
      </div>
      { 입력값 }
      <Profile></Profile>
      {
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h3 onClick={ () =>{ 누른제목변경(i) } }> { a } <span key={i} onClick={ ()=>{ 
              
              let 몇번째게시물 = i; 
              let copy = [...따봉];
              copy[몇번째게시물]++;
              따봉변경( copy )

              } }>👍</span> { 따봉 } </h3>
            <p>3월 17일 발행</p>
            <hr/>
          </div>
          )
        })
      }
      {/* { 입력값 }
      <input onChange={ (e)=> { 입력값변경(e .target.value) } } ></input> */}
      
      {
        modal == true
        ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
        :null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name: 'kim', age: 30 }
  }

  render(){
    return(
      <div>
      
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ ()=>{ this.setstate( {name: 'Park'} ) } }>버튼</button>
        
      </div>
    )
  }
}


export default App;
