import Head from "next/head";
import styled, { css } from "styled-components";
import shallow from "zustand/shallow";
import tw from "twin.macro";
import { useSampleStore, State } from "../stores/useSampleStore";

const Container = styled.div `
${tw ` min-h-screen bg-gray-100 flex flex-col justify-center items-center`}
`
const Counter = styled.span `
${tw `p-8 rounded bg-green-400 text-white font-bold cursor-pointer shadow`}
`
const getSampleState = (state: State) => ({
  bears: state.bears,
  increase: state.increase
});
export default function Home() {
  const { bears, increase } = useSampleStore(getSampleState, shallow);
  return (
      <Container>
        <Counter
          onClick={() => {
            increase(10);
          }}
        >
          ts example: click me ({bears})
        </Counter>
      </Container>
  );
}

