import React, {useState} from 'react';
import classes from './InvestmentForm.module.css';

const initialInvestment = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
};

const InvestmentForm = (props) => {

    const [userInvestment, setUserInvestment] = useState(initialInvestment)
    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInvestment);
    }

    const resetHandler = () => {
        setUserInvestment(initialInvestment)
    }

    const inputChangeHandler = (identifier, value) => {
        setUserInvestment((prevInvestment) => {
            return {
                ...prevInvestment,
                [identifier]: +value
            }
        })
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} value={userInvestment['current-savings']} type="number" id="current-savings" min="0" step="1" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} value={userInvestment['yearly-contribution']} type="number" id="yearly-contribution" min="0" step="1" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} value={userInvestment['expected-return']} type="number" id="expected-return" min="0" step="0.01" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event) => inputChangeHandler('duration', event.target.value)} value={userInvestment['duration']} type="number" id="duration" min="0" step="1" />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}
export default InvestmentForm;