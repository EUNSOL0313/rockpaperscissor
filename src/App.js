import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from './component/Box'
import userEvent from '@testing-library/user-event'

//1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 유저박스에 보임
//4. 버튼을 클릭하면 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3.4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 박스 테두리 색이 바뀐다(이기면 초록, 지면-빨강, 비기면 감정색이 보인다)

const choice = {
   rock: {
      name: 'Rock',
      img: 'https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png',
   },
   scissor: {
      name: 'Scissor',
      img: 'https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png',
   },
   paper: {
      name: 'Paper',
      img: 'https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png',
   },
}
function App() {
   const [userSelect, setUserSelect] = useState(null)
   const [computerSelect, setComputerSelect] = useState(null)
   const [result, setResult] = useState('')

   const play = (userChoice) => {
      setUserSelect(choice[userChoice])
      let computerChoice = randomChoice()
      //console.log('선택됨', userChoice)
      setComputerSelect(computerChoice)
      setResult(judgement(choice[userChoice], computerChoice))
   }
   const randomChoice = () => {
      let itemArray = Object.keys(choice) // Object.keys 객체에 키값만 뽑아서 어레이로 만들어주는 함수다
      //console.log('item array', itemArray)

      let randomItem = Math.floor(Math.random() * itemArray.length)
      //console.log('random value', randomItem)
      let final = itemArray[randomItem]
      //console.log('final item', final)
      return choice[final]
   }

   const judgement = (user, computer) => {
      console.log('user', user, 'computer', computer)

      //가위바위보 로직
      //가위를 냈을 때 상대는 가위,바위,보를 낼 수 있다.
      //가위를 냈을 때 상대가 가위를 내면 무승부, 바위를 내면 상대 승, 보를 내면 상대 패
      //user == computer tie
      //user == rock  computer == "scissor" user win
      //user == "rock" computer == paper user lose
      //user == scissors computer == paper user win
      //user == scissors computer == rock user lose
      //user == paper computer == rock user win
      //user == paper computer == scissor user lose

      // if (user.name == computer.name) {
      //    return 'tie'
      // } else if (user.name == 'Rock') {
      //    if (computer.name == 'Scissor') {
      //       return 'win'
      //    } else {
      //       return 'lose'
      //    }
      // }

      //삼항연산자로 쓰기
      if (user.name == computer.name) {
         return 'Tie'
      } else if (user.name == 'Rock') return computer.name == 'Scissor' ? 'Win' : 'Lose'
      else if (user.name == 'Scissor') return computer.name == 'Paper' ? 'Win' : 'Lose'
      else if (user.name == 'Paper') return computer.name == 'Rock' ? 'Win' : 'Lose'
   }

   return (
      <div className="container">
         <div className="main_title col"> 가위 바위 보 게임 </div>
         <div className="main col-12">
            <Box title="You" item={userSelect} result={result} />
            <Box title="Computer" item={computerSelect} result={result} />
         </div>
         <div className="main">
            <button className="btn_scissor" onClick={() => play('scissor')}>
               <img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" alt="가위 이미지"></img>
            </button>
            <button className="btn_rock" onClick={() => play('rock')}>
               <img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" alt="바위 이미지"></img>
            </button>
            <button className="btn_paper" onClick={() => play('paper')}>
               <img src="https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png" alt="보 이미지"></img>
            </button>
         </div>
      </div>
   )
}

export default App
