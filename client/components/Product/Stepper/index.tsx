import styles from "./styles.module.scss";

import Step from "./Step";

type stepperProps = {
  currentStepIndex?: number;
  steps: any[];
};

const Stepper = ({currentStepIndex, steps}: stepperProps) => (
  <div className={styles.container}>
    {steps.map((name, index) => (
      <Step
        number={index + 1}
        key={name}
        text={name}
        isActive={
          typeof currentStepIndex === "number"
            ? index <= currentStepIndex
            : true
        }
      />
    ))}
  </div>
);

export default Stepper;
