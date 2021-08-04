import styled from 'styled-components';

const Stack = styled.div`
  padding-top: 8px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  .active {
    color: var(--clr-primary);
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  a {
    color: var(--clr-white);
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  @media (min-width: 1024px)
  {
		font-size: 1.5em;
	} 
`;

export default Stack;