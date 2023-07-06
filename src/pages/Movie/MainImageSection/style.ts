import { styled } from "styled-components";

interface IProps {
  image: string;
}

//   export const MyTag = styled.button.attrs((props: MyTagProps) => ({
//     title: props.myThisThingValue,
//   }))<MyTagProps>`
//     background: ${props => props.thisIsAlsoMyThing};
//   `;

// export const StyledSection = styled.section.attrs((props: IProps) => ({
//   image: props.image,
// }))<IProps>`
//   background-image: url(${(props) => props.image});
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 600px;
// `;

export const StyledSection = styled.section<IProps>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
`;
