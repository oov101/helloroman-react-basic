import React, { useState } from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favorite Twitter account",
  article: "Article",
  note: "Note",
};

const Form = ({ submitFn }) => {
  const [activeOption, setActiveOption] = useState(types.twitter);

  const handleRadioButtonChange = type => {
    setActiveOption(type);
  };

  return (
    <div className={styles.wrapper}>
      <Title>Add new {descriptions[activeOption]}</Title>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={submitFn}
      >
        <div className={styles.formOptions}>
          <Radio
            id={types.twitter}
            checked={activeOption === types.twitter}
            changeFn={() => handleRadioButtonChange(types.twitter)}
          >
            Twitter
          </Radio>
          <Radio
            id={types.article}
            checked={activeOption === types.article}
            changeFn={() => handleRadioButtonChange(types.article)}
          >
            Article
          </Radio>
          <Radio
            id={types.note}
            checked={activeOption === types.note}
            changeFn={() => handleRadioButtonChange(types.note)}
          >
            Note
          </Radio>
        </div>
        <Input
          name="name"
          label={activeOption === types.twitter ? "Twitter Name" : "Title"}
          maxLength={30}
        />
        {activeOption !== types.note ? (
          <Input
            name="link"
            label={activeOption === types.twitter ? "Twitter Link" : "Link"}
          />
        ) : null}

        {activeOption === types.twitter ? (
          <Input name="image" label="Image" />
        ) : null}
        <Input tag="textarea" name="description" label="Description" />
        <Button>add new item</Button>
      </form>
    </div>
  );
};

export default Form;
