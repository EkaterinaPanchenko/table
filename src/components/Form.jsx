import styled from "styled-components";

export const Form = ({ titles, handleSubmit }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const resultFormData = {};

    for (const [name, value] of formData) {
      resultFormData[name] = value;
    }

    event.target.reset();
    handleSubmit(resultFormData);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      {titles.map(({ name, text, id }) =>
        name === "number" || name === "delete" ? null : (
          <Input required key={id} type="text" name={name} placeholder={text} />
        )
      )}
      <Button>Добавить</Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 50px auto 0;
  row-gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  width: 40%;
  margin: auto;
`;
