import { FC, memo, useCallback, useEffect, useState } from "react";
import initializeIterator from "./helper";
import colorObjectType from "./types";
import { MainContainer, Wrapper } from "./styled.index";

const HomeComponent: FC = memo(() => {
  const [colorIterator, setColorIterator] = useState<IterableIterator<colorObjectType>>(initializeIterator());
  const [colorState, changeColorState] = useState<colorObjectType>();

  const resetIterator = useCallback(() => {
    setColorIterator(initializeIterator)
  }, [])

  const handleColorChange = useCallback(() => {
    changeColorState(colorIterator.next().value)
  }, [])

  useEffect(() => {
    !colorState && resetIterator();
  }, [colorState])

  return (
    <MainContainer colorObject={colorState}>
      <Wrapper type="button" onClick={handleColorChange}>
        Toggle background color
      </Wrapper>
    </MainContainer>
  );
});

export default HomeComponent;
