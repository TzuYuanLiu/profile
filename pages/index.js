import styled from 'styled-components'
import {Component} from 'react'
import styledNormalize from 'styled-normalize'
import Head from 'next/head'

const Container = styled.div`
background: #00AE99;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding:0;
margin:0;
`
const Image = styled.img`
width: 20vw;
`
const Dialog = styled.div`
width: 200px;
height: 150px;
background: #0061ce;
border-radius: 10px;
color: white;
padding: 30px; 
box-sizing: border-box;
`

const ConfirmButton = styled.button`
width: 50%;
box-sizing: border-box;
background: #FF317C;
border: 0;
color: white;

`

const Form = () => (
<input placeholder="your name please" type="text" />
) 



export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
 

  renderHead(){
    return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no" />
      <style>{`
        ${styledNormalize}
        html, body{
          font-family:'Helvetica Neue', 'Helvetica', 'Arial', 'PingFang TC', '微软雅黑', 'Microsoft YaHei', '华文细黑', 'STHeiti', 'sans-serif';
        }
      `}</style>
      <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js" />
      <script dangerouslySetInnerHTML={{__html:`
        var config = {
          apiKey: "AIzaSyBgihqTUJ6VBxvqg0cCI1cRmbCkI3visy8",
          authDomain: "cresclab.firebaseapp.com",
          databaseURL: "https://cresclab.firebaseio.com",
          projectId: "cresclab",
          storageBucket: "cresclab.appspot.com",
          messagingSenderId: "712000115132"
        };
        firebase.initializeApp(config)
      `}} />
    </Head>
    )
  }
  
  render() {
    return (
      <div>{this.renderHead()}
        <Container> 
    <Image src="https://raw.githubusercontent.com/TzuYuanLiu/WizardAmigos/master/hi.png" />
    <Dialog class="element">{this.state.text}
      <Form />
      <ConfirmButton onClick={()=>this.renderTextByletters()}>Confirm!</ConfirmButton>
    </Dialog>

  </Container>   
  </div> 
    )    
  }
}
