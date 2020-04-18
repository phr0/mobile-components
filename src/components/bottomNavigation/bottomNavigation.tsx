import * as React from "react";
import styled from "styled-components";


const BottomNavigationContainer = styled.div`
    display: flex;
    border-top: 1px solid lightgray;
`;

const NavItem = styled.div`
    flex: 1 1 auto;
    text-align: center;
    &:not(:last-child){
        border-right: 1px solid lightgray;
    }
`;

export function BottomNavigation(props:{
    navigationItems: JSX.Element[];
}){
    return <BottomNavigationContainer>
        {props.navigationItems.map(x=><NavItem>{x}</NavItem>)}
    </BottomNavigationContainer>;
}
