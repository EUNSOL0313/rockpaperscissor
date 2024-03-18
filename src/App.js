import { useState } from 'react'
import './App.css'
import Box from './compnent/Box'
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
   scissors: {
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

   const play = (userChoice) => {
      setUserSelect(choice[userChoice])
      console.log('선택됨', userChoice)
   }

   return (
      <div>
         <div className="main">
            <Box title="You" item={userSelect} />
            {/* <Box title="Computer" /> */}
         </div>
         <div className="main">
            <button onClick={() => play('scissors')}>가위</button>
            <button onClick={() => play('rock')}>바위</button>
            <button onClick={() => play('paper')}>보</button>
         </div>
      </div>
   )
}

export default App
