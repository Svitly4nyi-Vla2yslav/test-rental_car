import styled from "@emotion/styled";


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
 
`;

const NotFilters = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Manrope';
  font-size: 24px;
`

const CardList = styled.ul`
margin-top: 100px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 50px 29px;
// margin-bottom: 100px;
`;

const LinkLoadMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  text-decoration-line: underline;
  // padding-top: 100px;
  padding-bottom: 100px;
  // margin-bottom: 100px;
  color: rgba(52, 112, 255, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`
export {CardList, LinkLoadMore, Container, NotFilters}