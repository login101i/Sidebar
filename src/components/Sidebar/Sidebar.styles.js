import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
  width: ${p => p.isSidebarOpen ? '27%' : '5%'};
  background: yellow;
    max-width: 280px;
  min-width: 100px;
   background-image: linear-gradient(
    315deg,
    rgba(252, 82, 150, 0.8) 0%,
    rgba(246, 112, 98, 0.8) 74%),
    url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top bottom;
  color:white;
  position:relative;
  transition:0.2s;
`

export const SideBarHeader = styled.div`
padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  font-family: ${p => p.font}
  border:2px solid green;
`

export const MenuItemContainer = styled.div``;

export const MenuItem = styled.div`
${p => !p.isSidebarOpen && `
text-align:center;
${p.selected && 'background-color:rgba(0,0,0,0.5)'};
`}
  padding: 6px 20px;
  font-weight: 600;
  color: rgba(19, 15, 64);
  font-family:  ${p => p.font};
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'} ;
 white-space:nowrap;
position:relative;
transition:0.5s all ease-in-out;

  

      &:hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;

  }

   ${p => !p.selected && `
    &:hover {
      &:after {
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: .1s ease-in all;
      }
    }
  `}

  
    &:after {
    content: '';
    display: block;
    margin: 8px 0 4px;
        border: 1px solid ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(225, 112, 85)'};
    transition:0.5s all ease-in-out;
        display: ${p => p.isSidebarOpen && p.selected && p.isOpen ? 'none' : 'block'};


  }
`;

export const Text = styled.p`
  display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
  ${p => p.isSidebarOpen ?
    'opacity:1' : 'opacity:0'
  };
  transition:0.1s  ease-in-out;

`

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  padding-right: 20px;
  transition:.2s ease-in-out;
    ${p => !p.isSidebarOpen && `
  padding-right:0px;
    `
  };
 
`

// Toggler -----------------------------------------------------------------------------

export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative; // horizontal lines
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: .25em;
      height: .1em;
      width: 100%;
      background: #fff;
      box-shadow: 
        0 .75em 0 0 #fff,
        0 1.5em 0 0 #fff;        
    }
    `
// Dropdown icon ----------------------------------------------------------------------
export const DropdownIcon = styled.span`
  position: absolute;
  top: ${p => p.isOpen ? '16px' : '12px'};
  right: 24px;
  border: solid blue;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
   transform: ${p => p.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
   transition:0.4s all ease-in-out
`;


export const ItemContainer = styled.div`

`
export const SubMenuItemContainer = styled.div`
  font-size: 14px;
  ${p => p.isSidebarOpen && 'padding-left: 18%'};  
  ${p => !p.isSidebarOpen && 'text-align: center'};
`;


export const SubMenuItem = styled.p`
  color: rgba(19, 15, 64);
  &:hover {
  color: rgba(255, 255, 255)
  }
`;