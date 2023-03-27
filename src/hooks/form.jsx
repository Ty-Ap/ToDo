import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback({...values});
  };

  const handleChange = (event) => {
    let name, value;
    if(typeof(event) === 'object'){
      name = event.target.name;
      value = event.target.value;
    } else {
      console.log('event from slider', event)
      // hard coded for Mantine slider functionality 
      // change "difficulty" language if desired
      // change name dynamically if doing stretch goal!
      name = 'difficulty';
      value = event;
    }

    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

const AppProvider = ({ children }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortOrder, setSortOrder] = useState('difficulty');

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const changeSortOrder = (order) => {
    setSortOrder(order);
  };

  return (
    <AppContext.Provider
      value={{
        showCompleted,
        toggleShowCompleted,
        sortOrder,
        changeSortOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useForm };
