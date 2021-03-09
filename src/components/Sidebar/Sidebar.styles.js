import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
width:${p => p.isSideBarOpen ? '20%' : "5%"};
max-width:230px;
min-width:70px;
background-image:
linear-gradient(
243deg,
rgba(231,153,122, 0.4) 11%,
rgba(131,153,392, 0.4) 31%),
url(${p => p.backgroundImage});
background-size:cover;
background-repeat:no-repeat;
color:white;
position:relative;
transition:0.4s all ease-in-out;

`
export const SidebarHeader = styled.div`
text-align:center;
paddgin:10px;
margin:20px;
letter-spacing:10px;
font-weight:700;
font-family:${p => p.font};


`
export const MenuItemContainer = styled.div`

`
export const MenuItem = styled.div`
text-align:center;
padding-top:20px;
paddgin-bottom:20px;
font-weight:700;
align-items:center;
font-family:${p => p.font};
color:${p => p.selected ? 'White' : 'rgb(244,244,244'};
${p => !p.isSideBarOpen && `
text-align:center;
${p.selected && 'background-color:grey'}`};
white-space:nowrap;
position:relative;


&:after {
  content:'';
  ${p => p.selected ? 'border:1px solid white' : 'border:1px solid grey'};
display: ${p => p.isOpen && p.isSideBarOpen ? "none" : 'block'}
}
&: hover {
  color: white;
  transition: 0.3s;
}

${p => !p.selected && `
&:hover{
  &:after {
    border:1px solid white;
    transitioni:0.3s all ease-in-out;
  }
}
`}
`



export const Text = styled.div`
display:${p => p.isSideBarOpen ? 'inline' : 'none'}
`


export const Icon = styled.img`
width: 22px;
height: 22px;
margin-right: 22px;
${p => !p.isSideBarOpen && `
text-align:center;
margin-right:0px;
transition:0.2s all ease-in-out;
`}

`

// toggler----------------------------
export const TogglerContainer = styled.div`
position:absolute;
width:30%;
bottom:11%;
left:0;
right:0;
margin:0 auto;

`
export const Toggler = styled.div`

height:40px;
cursor:pointer;
position:relative;

&:after{
  content:'';
  position:absolute;
  left:0;
  top:10px;
  height:4px;
  width:100%;
  background:white;
  box-shadow:
   0 0.9em 0 0 white,
  0 1.8em 0 0 white; 
  transition:0.3 all ease-in-out;
}


`
export const DropDownIcon = styled.span`
position:absolute;
top:30px;
right:10px;
border:solid ${p => p.isSelected ? 'white' : 'grey'};
border-width:0 1px 1px 0;
padding:3px;
transform:rotate(45deg);
transform: ${p => p.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
transition:0.3s;

`


export const SubmenuItem = styled.div`
width:50px;
height:20px;
text-align:center;
color:white;
padding:5px;

&:hover {
  color:rgba(255,255,155);
  font-weight:600;
  transition:0.3s all ease-in-out;
}
`

export const SubmenuContainer = styled.div`
display:relative;
width:100%;
${p => p.isSideBarOpen && 'padding-left: 15%'}
${p => !p.isSideBarOpen && 'display:none; transition:0.3s all ease-in-out'}
`

