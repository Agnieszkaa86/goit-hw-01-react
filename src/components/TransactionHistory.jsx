import React from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';

// const Table = styled.table`
//   display: block;
//   width: 870px;
//   margin: 0;
//   padding: 0;
//   margin-bottom: 20px;
//   border: 1px solid #e0e6e7;
//   border-collapse: collapse;
//   color: #686461;
//   box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.25);
// `;
// const Thead = styled.thead`
//   background: #00bcd4;
//   color: white;
//   padding: 10px 20px;
//   font-family: 'Nobile', sans-serif;
//   text-transform: uppercase;
//   font-size: 13px;
//   font-weight: 700;
// }
// `;
// const Trow = styled.tr`
//   text-transform: capitalize;
//   text-align: center;
//   padding-left: 114px;
//   &:nth-child(even) {
//     background-color: #ecf2f3;
//   }
// `;

function TransactionHistory(props) {
  const { history } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {history.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TransactionHistory.prototypes = {
  history: PropTypes.array,
};
export default TransactionHistory;
