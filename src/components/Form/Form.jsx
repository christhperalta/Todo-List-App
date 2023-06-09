import { useForm } from '../../Hooks/useForm';
import PropTypes from 'prop-types';
import './Form.scss';

export const Form = ({ onAddTodo }) => {
  const { description, onFormSubmit, onInputChange } = useForm(onAddTodo);

  return (
    <form onSubmit={onFormSubmit} className="Form">
      <input
        className="Form-input"
        type="text"
        placeholder="Add your new item"
        value={description}
        onChange={onInputChange}
      />
      <button className="Form-btn" type="submit">
        Add
      </button>
    </form>
  );
};

Form.protoType = {
  onAddTodo: PropTypes.func.isRequired,
};
