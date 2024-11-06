// util/calculator.ts

export interface CalculatorState {
    currentValue: string;
    operator: string | null;
    previousValue: string | null;
  }
  
  export const initialState: CalculatorState = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };
  
  type OperationType = "number" | "operator" | "clear" | "posneg" | "percentage" | "equal";
  
  export default function calculator(
    type: OperationType,
    value: string | number | undefined,
    state: CalculatorState
  ): CalculatorState {
    switch (type) {
      case "number":
        return {
          ...state,
          currentValue: state.currentValue === "0" ? String(value) : state.currentValue + value
        };
      case "operator":
        return {
          ...state,
          operator: String(value),
          previousValue: state.currentValue,
          currentValue: "0"
        };
      case "clear":
        return initialState;
      case "posneg":
        return {
          ...state,
          currentValue: (parseFloat(state.currentValue) * -1).toString()
        };
      case "percentage":
        return {
          ...state,
          currentValue: (parseFloat(state.currentValue) * 0.01).toString()
        };
      case "equal":
        const { currentValue, previousValue, operator } = state;
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue || "0");
  
        if (operator === "+") return { ...state, currentValue: (previous + current).toString(), operator: null, previousValue: null };
        if (operator === "-") return { ...state, currentValue: (previous - current).toString(), operator: null, previousValue: null };
        if (operator === "*") return { ...state, currentValue: (previous * current).toString(), operator: null, previousValue: null };
        if (operator === "/") return { ...state, currentValue: (previous / current).toString(), operator: null, previousValue: null };
        return state;
      default:
        return state;
    }
  }
  