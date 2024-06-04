import styled from "styled-components";

export const UserArea = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    grid-gap: 20px;
    justify-content: center;
`

export const EachUserStyled = styled.div`
    display: grid;
    grid-template-rows: 20px 20px 20px 40px;
    border-style: solid;
    border-width: 2px; 
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'Username username'
                         'Name name'
                         'Email email'
                         'Address address';
    justify-items: left;
`

export const H5Styled = styled.h5<{ area: string }> `
    margin:10px; 
    grid-area: ${props => props.area}
    
`

// h5.Username {
//     grid-area: Username;
    

// }

// h5.username {
//     grid-area: username;
// }

// h5.Name {
//     grid-area: Name;
// }

// h5.name {
//     grid-area: name;
// }

// h5.Email {
//     grid-area: Email;
// }

// h5.email {
//     grid-area: email;
// }

// h5.Address {
//     grid-area: Address;
// }

// h5.address {
//     grid-area: address;
// }