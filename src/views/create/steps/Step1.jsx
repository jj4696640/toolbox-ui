import React from "react";
import ImageInput from "../form/ImageInput";
import NumberInput from "../form/NumberInput";
import SelectInput from "../form/SelectInput";
import TextInput from "../form/TextInput";

function Step1(props) {
  return (
    <>
      <h2>Step 1: Basic Information</h2>
      <ImageInput
        front={props.state.front}
        handleImageUpload={props.functions.handleImageUpload}
        title="Front"
      />
      <ImageInput
        front={props.state.left}
        handleImageUpload={props.functions.handleImageUpload}
        title="Left"
      />
      <ImageInput
        front={props.state.right}
        handleImageUpload={props.functions.handleImageUpload}
        title="Right"
      />
      <ImageInput
        front={props.state.hind}
        handleImageUpload={props.functions.handleImageUpload}
        title="Hind"
      />
      <TextInput
        title="Name"
        value={props.state.name}
        setValue={props.functions.setName}
      />
      <TextInput
        title="Case Reference"
        value={props.state.caseRef}
        setValue={props.functions.setCaseRef}
      />
      <SelectInput
        title="Station"
        value={props.state.station}
        setValue={props.functions.setStation}
        items={props.state.data.stations}
      />
      <TextInput
        title="Offence"
        value={props.state.offence}
        setValue={props.functions.setOffence}
        styleClass="col-lg-12"
      />
      <SelectInput
        title="Sex"
        value={props.state.sex}
        setValue={props.functions.setSex}
        items={props.state.data.sexes}
      />
      <NumberInput
        title="Age"
        value={props.state.age}
        setValue={props.functions.setAge}
        styleClass="col-lg-4"
      />
      <SelectInput
        title="Sex"
        value={props.state.nationality}
        setValue={props.functions.setNationality}
        items={props.state.data.countries}
      />
      <TextInput
        title="Place of birth"
        value={props.state.placeOfBirth}
        setValue={props.functions.setPlaceOfBirth}
        styleClass="col-lg-6"
      />
      <TextInput
        title="Present Address"
        value={props.state.presentAddress}
        setValue={props.functions.setPresentAddress}
        styleClass="col-lg-6"
      />
      <TextInput
        title="Telephone"
        value={props.state.telephone}
        setValue={props.functions.setTelephone}
        styleClass="col-lg-12"
      />
    </>
  );
}

export default Step1;
