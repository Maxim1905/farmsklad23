import Accordion from "../../../common/Accordion";
import FiltersExample from "./FiltersExample";

const AccordionsPanel = () => (
  <>
    <Accordion title="Бренды">
      <FiltersExample />
    </Accordion>

    <Accordion title="Форма выпуска">
      <FiltersExample />
    </Accordion>

    <Accordion title="Способ применения">
      <FiltersExample />
    </Accordion>
  </>
);

export default AccordionsPanel;
