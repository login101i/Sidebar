import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
  width: ${p => p.isSidebarOpen ? '27%' :'5%'};
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
  transition:0.3s;
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
  padding: 6px 20px;
  font-weight: 600;
  color: rgba(19, 15, 64);
  ${p => p.font};
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'} ;  

      &:hover {
    color: rgba(255, 255, 255);
    transition: .1s ease-in all;
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

  }
`;

export const Text = styled.p`
  display: inline
`

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  padding-right: 20px;
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
