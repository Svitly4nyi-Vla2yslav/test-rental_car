import styled from '@emotion/styled';
import Select from 'react-select';
import { Button } from 'antd';


const SelectStyles = styled(Select)`
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 8px;
  font-size: 16px;
  background-color: rgba(247, 247, 251, 1);

  .css-13cymwt-control{
      border: none;
      background-color: transparent;

  &:hover,
  &:focus {
    border: none !important;
    background-color: transparent !important;
  }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;

const InputFrom = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

const InputTo = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none !important;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

const SpanFrom = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

const SpanTo = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

const BtnSearch = styled(Button)`
  width:136px;
  height: 48px;
  border-radius: 12px;
  margin-left: 18px;
`

export {
    SelectStyles,
    Container,
    SelectContainer,
    InputContainer,
    Form,
    Label,
    InputFrom,
    InputTo,
    SpanFrom,
    SpanTo, 
    BtnSearch
};