import { useState } from 'react';
import { message } from 'antd';
import { CarMakeOption, PriceOption } from './Types';
import {
  Container,
  Form,
  InputContainer,
  InputFrom,
  InputTo,
  Label,
  SelectContainer,
  SpanFrom,
  SpanTo,
  BtnSearch,
} from './Filter.styled';
import React from 'react';
import { CarBrandSelect, PriceSelect } from './CarBrend';

interface FilterProps {
    carMakes: string[];
    carPrices: number[];
    minMileage: number;
    maxMileage: number;
    onFilterChange: (newFilters: any) => void;
  }

function Filter({ carMakes, carPrices, onFilterChange }: FilterProps) {
  const [selectedCarMake, setSelectedCarMake] = useState<CarMakeOption | null>(
    null
  );
  const [selectedCarPriceStep, setSelectedCarPriceStep] = useState<
    number | null
  >(null);
  const [selectedCarPriceLabel, setSelectedCarPriceLabel] =
    useState<string>('');
  const [minMileageValue, setMinMileageValue] = useState<string>('');
  const [maxMileageValue, setMaxMileageValue] = useState<string>('');

  const makeOptions: CarMakeOption[] = carMakes.map(make => ({
    value: make,
    label: make,
  }));

  const priceRangeOptions: PriceOption[] = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = (selectedOption: PriceOption) => {
    setSelectedCarPriceStep(selectedOption.value);
    setSelectedCarPriceLabel(selectedOption.label);
  };

  const filteredPrices: number[] = carPrices.filter(
    price => price <= (selectedCarPriceStep || 0)
  );

  const formatMileage = (value: string) => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinMileageValue(e.target.value);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxMileageValue(e.target.value);
  };

  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      parseInt(minMileageValue.replace(/,/g, ''), 10) >
      parseInt(maxMileageValue.replace(/,/g, ''), 10)
    ) {
      message.error('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    const newFilters = {
      make: selectedCarMake ? selectedCarMake.value : '',
      filteredPrices: filteredPrices.map(price => ({
        value: price,
        label: `${price}`,
      })),
      minMileage: parseInt(minMileageValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxMileageValue.replace(/,/g, ''), 10),
    };

    onFilterChange(newFilters);
  };

  return (
    <Container>
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <CarBrandSelect
          selectedMake={selectedCarMake}
          setSelectedMake={setSelectedCarMake}
          makeOptions={makeOptions}
        />
      </SelectContainer>

      <SelectContainer>
        <Label htmlFor="priceSelect">Price / 1 hour</Label>
        <PriceSelect
          selectedPriceStep={selectedCarPriceStep}
          selectedPriceLabel={selectedCarPriceLabel}
          handlePriceStepChange={handlePriceStepChange}
          priceRangeOptions={priceRangeOptions}
        />
      </SelectContainer>

      <Form onSubmit={handleFilterSubmit}>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputFrom
            type="text"
            value={formatMileage(minMileageValue)}
            onChange={handleMinInputChange}
          />
          <SpanFrom>From</SpanFrom>
          <InputTo
            type="text"
            value={formatMileage(maxMileageValue)}
            onChange={handleMaxInputChange}
          />
          <SpanTo>To</SpanTo>
          <BtnSearch type="primary" htmlType="submit">
            Search
          </BtnSearch>
        </InputContainer>
      </Form>
    </Container>
  );
}

export default Filter;
