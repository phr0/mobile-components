import * as React from "react";
import styled from "styled-components";

const Text = styled.div``;

const Icon = styled.div``;

const PaddedLink = styled.a`
    padding: 1rem;
    display: block;
`;

export function BottomNavigationLinkItem(
  props: {
    title: React.ReactNode;
    icon: React.ReactNode;
    onClick:()=>void;
  }
) {
  return (
    <PaddedLink onClick={props.onClick}>
      <Icon>{props.icon}</Icon>
      <Text>{props.title}</Text>
    </PaddedLink>
  );
}
