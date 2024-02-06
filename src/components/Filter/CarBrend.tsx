import React from 'react';
import { SelectStyles } from './Filter.styled';
import { CarMakeOption, PriceOption } from './Types';

interface CarBrandSelectProps {
  selectedMake: CarMakeOption | null;
  setSelectedMake: (selectedOption: CarMakeOption | null) => void;
  makeOptions: CarMakeOption[];
}

const CarBrandSelect: React.FC<CarBrandSelectProps> = ({
  selectedMake,
  setSelectedMake,
  makeOptions,
}: CarBrandSelectProps) => (
  <SelectStyles
    id="nameSelect"
    placeholder="Enter the text"
    value={selectedMake}
    isClearable={true}
    onChange={(selectedOption: CarMakeOption | null) =>
      setSelectedMake(selectedOption)
    }
    options={makeOptions}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

interface PriceSelectProps {
  selectedPriceStep: number | null;
  selectedPriceLabel: string;
  handlePriceStepChange: (selectedOption: PriceOption) => void;
  priceRangeOptions: PriceOption[];
}

const PriceSelect = ({
  selectedPriceStep,
  selectedPriceLabel,
  handlePriceStepChange,
  priceRangeOptions,
}: PriceSelectProps) => (
  <SelectStyles
    id="priceSelect"
    placeholder="To $"
    value={
      selectedPriceStep
        ? { value: selectedPriceStep, label: selectedPriceLabel }
        : null
    }
    onChange={handlePriceStepChange}
    options={priceRangeOptions}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

export { CarBrandSelect, PriceSelect };
