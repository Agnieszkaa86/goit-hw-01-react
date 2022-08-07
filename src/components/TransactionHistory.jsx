import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
 
  display: block;
  width: 500px;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 20px;
  border: 1px solid #e0e6e7;
  color: #686461;
  
`;
const Th = styled.th`
  width: 500px;
  background: #00bcd4;
  color: white;
  padding: 10px 20px;
  font-family: 'Nobile', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
`;

const Tr = styled.tr`
  text-transform: capitalize;
  text-align: center;
  padding-left: 114px;
   &:nth-child(even) {
     background-color: #ecf2f3;
   }
 `;

function TransactionHistory(props) {
  const {items} = props;
  return (
    
      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </Tr>
          ))}
        </tbody>
      </Table>
    
  );
}
TransactionHistory.prototypes = {
  history: PropTypes.array,
};
export default TransactionHistory;
