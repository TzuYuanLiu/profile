import styled from 'styled-components'
import {Component} from 'react'
import Head from 'next/head'
import styledNormalize from 'styled-normalize'
import Typist from 'react-typist'
import AvatarImage from '../components/common'


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
width: 12vw;
`
const Dialog = styled.div`
width: 200px;
height: 150px;
background: #0061ce;
border-radius: 10px;
color: white;
padding: 30px; 
box-sizing: border-box;
overflow: auto;
`

const ConfirmButton = styled.button`
width: 50%;
box-sizing: border-box;
background: #FF317C;
border: 0;
color: white;
`

const Font = styled.div`
font-family: 'VT323', monospace;
`

const NavBar = styled.div`
width: 100%;
background: #dadada;
height: 50px;
color: #FC3057;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
`

const ListContainer = styled.ul`
display: flex;
list-style-type: none;
& > li {
  margin: 0 10px;
  cursor: pointer;  
}
`

const Form = () => (
<input placeholder="your name please" type="text" />
) 

const Logo = styled.div`
font-size: 20px;
color: #FC3057;
`

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: "main"
    }

    this.renderList = this.renderList.bind(this)
  }

  renderHead(){
    return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no" />
      <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet" />
      <style>{`
        ${styledNormalize}
        html, body{
          font-family:'Helvetica Neue', 'Helvetica', 'Arial', 'PingFang TC', '微软雅黑', 'Microsoft YaHei', '华文细黑', 'STHeiti', 'sans-serif';
        }
      `}</style>
      
    </Head>
    )
  }

  renderContent() {
    switch (this.state.activePage) {
      case "home":
        return (<div> <Image src="https://raw.githubusercontent.com/TzuYuanLiu/WizardAmigos/master/hi.png" /></div>)
      case "contact" :
        return (<div>Contact</div>)
      case "about" :
        return (<div>about</div>)
      case "resume" :
        return (<div>resume</div>)
      case "portfolio" :
        return (<div>portfolio</div>)
      default:
        return (<div> <Image src="https://raw.githubusercontent.com/TzuYuanLiu/WizardAmigos/master/hi.png" /></div>)
    }
  }
   
   renderList() {
     let lists = [
        "home",
        "contact",
        "about",
        "resume",
        "portfolio"
     ]

      let allList = lists.map((list, index)=>{
        return (
        <li 
          style={{cursor: "pointer"}}
          key={index} 
          onClick={()=>{
            this.setState({activePage: list})
          }}
        >
        {list}
        </li>)
      })

      return allList;
   }
  
  
  render() {
    return (
      <div>
       {this.renderHead()}
        {/* <NavBar>
          <Logo>Tzuyuan</Logo>
          <ListContainer style={{cursor: "pointer"}}>
            {this.renderList()}
          </ListContainer>
        </NavBar> */}
        
        <Container>
          <AvatarImage />
          <Dialog>
            <Typist>
            hihi, glad you are here,
            ready to have a chat with me?
            </Typist>
            <button>Yes</button>
            <button>no</button>
        </Dialog>
        </Container>   
      </div>  
    )    
  }
}
