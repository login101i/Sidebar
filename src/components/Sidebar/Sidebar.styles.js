import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
  width: 23%;
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