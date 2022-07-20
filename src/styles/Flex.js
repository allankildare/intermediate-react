import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${ props => props.direction === 'column' ? 'column' : 'row' };
    justify-content: ${ props => props.center ? 'center' : props.justifyContent };
`