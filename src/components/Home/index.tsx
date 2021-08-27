import { FC, memo, useState } from "react";
import initializeIterator from "./helper";
import colorObjectType from "./types";
import { MainContainer, Wrapper } from "./styled.index";

const HomeComponent: FC = memo(() => {
  const [colorIterator, setColorIterator] = useState<IterableIterator<colorObjectType>>(initializeIterator());
  const [colorState, changeColorState] = useState<colorObjectType>(colorIterator.next().value)
  return (
    <MainContainer colorObject={colorState}>
      <Wrapper type="button" >
        Toggle background color
      </Wrapper>
    </MainContainer>
  );
});

export default HomeComponent;