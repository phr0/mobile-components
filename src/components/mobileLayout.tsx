import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  padding: 0 1rem;
`;

const Head = styled.div`
  flex: 0 1 auto;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Bottom = styled.div`
  flex: 0 1 auto;
  box-shadow: 0px 0px 5px gray;
`;

export function MobileLayout(props: {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: JSX.Element;
  mainStyle?: React.CSSProperties;
}) {
  const [scrollPosition, setScrollPosition] = React.useState<
    "top" | "bottom" | "middle"
  >("top");
  const mainSection = React.useRef<HTMLDivElement>(null);
  function onMainSectionScroll() {
    if (!mainSection.current) { return; }
    const scrollTop = mainSection.current.scrollTop;
    if (scrollTop === 0) { setScrollPosition("top"); }
    else { setScrollPosition("middle"); }
  }

  return (
    <Container>
      {props.header && (
        <Head
          style={
            scrollPosition !== "top"
              ? {
                  borderBottom: "1px solid lightgray",
                  boxShadow: "0px 0px 5px gray"
                }
              : {}
          }
        >
          {props.header}
        </Head>
      )}
      <Main style={props.mainStyle} onScroll={onMainSectionScroll} ref={mainSection}>
        {props.children}
      </Main>
      {props.footer && <Bottom>{props.footer}</Bottom>}
    </Container>
  );
}
