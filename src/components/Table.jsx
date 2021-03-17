import styled from "styled-components";

const names = {
  number: "number",
  name: "name",
  quantity: "quantity",
  cost: "cost",
  delete: "delete",
};

export const Table = ({ data, titles, handleChange, handleRemove }) => {
  const onChange = ({ target: { value, name }, currentTarget: { id } }) => {
    handleChange(value, name, id);
  };

  const getTotalCost = () =>
    data.reduce((accum, { cost, quantity }) => accum + cost * quantity, 0);

  if (data.length < 1) {
    return null;
  }
  return (
    <TableContainer>
      <thead>
        <tr>
          {titles.map(({ text, id }) => (
            <HeaderTitle key={id}>{text}</HeaderTitle>
          ))}
        </tr>
      </thead>
      <tfoot>
        <tr>
          <HeaderTitle colSpan="5">
            Общая стоимость товаров: {getTotalCost()}
          </HeaderTitle>
        </tr>
      </tfoot>
      <tbody>
        <>
          {data.map(({ name, quantity, cost, id }, index) => (
            <tr key={id} id={id} onChange={onChange}>
              <Item>
                <Textarea
                  name={names.number}
                  disabled
                  defaultValue={index + 1}
                />
              </Item>
              <Item>
                <Textarea name={names.name} defaultValue={name} />
              </Item>
              <Item>
                <Textarea name={names.quantity} defaultValue={quantity} />
              </Item>
              <Item>
                <Textarea name={names.cost} defaultValue={cost} />
              </Item>
              <Item>
                <RemoveButton onClick={() => handleRemove(id)}>
                  &#10006;
                </RemoveButton>
              </Item>
            </tr>
          ))}
        </>
      </tbody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  margin: 50px auto;
  width: 80%;
  border-collapse: collapse;
  font-size: 16px;
`;

const HeaderTitle = styled.th`
  border: 2px solid #000;
`;

const Item = styled.td`
  border: 2px solid #000;

  :last-of-type {
    padding: 0 10px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  padding: 10px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font-size: 16px;
`;

const RemoveButton = styled.button`
  border: none;
  appearance: none;
  padding: 5px;
  background-color: transparent;
  width: 100%;
  font-weight: 700;
  outline: none;
  font-size: 18px;
  color: red;
  cursor: pointer;
`;
