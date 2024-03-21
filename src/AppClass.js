import React, { Component } from 'react'
import './App.css'
import BoxClass from './component/BoxClass'

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

export default class AppClass extends Component {
   constructor() {
      super()
      this.state = {
         userSelect: null,
         computerSelect: null,
         result: '',
      }
   }

   play = (userChoice) => {
      let computerChoice = this.randomChoice()
      this.setState({
         userSelect: choice[userChoice],
         computerSelect: computerChoice,
         result: this.judgement(choice[userChoice], computerChoice),
      })
   }
   randomChoice = () => {
      let itemArray = Object.keys(choice)
      let randomItem = Math.floor(Math.random() * itemArray.length)
      let final = itemArray[randomItem]
      return choice[final]
   }

   judgement = (user, computer) => {
      if (user.name == computer.name) {
         return 'Tie'
      } else if (user.name == 'Rock') return computer.name == 'Scissor' ? 'Win' : 'Lose'
      else if (user.name == 'Scissor') return computer.name == 'Paper' ? 'Win' : 'Lose'
      else if (user.name == 'Paper') return computer.name == 'Rock' ? 'Win' : 'Lose'
   }

   render() {
      return (
         <div className="container">
            <div className="main_title col"> 가위 바위 보 게임 </div>
            <div className="main col-12">
               <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
               <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
            </div>
            <div className="main">
               <button className="btn_scissor" onClick={() => this.play('scissor')}>
                  <img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" alt="가위 이미지"></img>
               </button>
               <button className="btn_rock" onClick={() => this.play('rock')}>
                  <img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" alt="바위 이미지"></img>
               </button>
               <button className="btn_paper" onClick={() => this.play('paper')}>
                  <img
                     src="https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png"
                     alt="보이미지"
                  ></img>
               </button>
            </div>
         </div>
      )
   }
}
