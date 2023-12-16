import { fetchCountries } from "../api/countries";
import { Question } from "./definiton";

export default async function getQuestions(length: number) {
  const countries = await fetchCountries();
  const questions: Question[] = [];

  for (let i = 0; i < length; i++) {
    const countriesIndex = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * countries.length)
    );
    const rightAnswerIndex = Math.floor(Math.random() * 4);

    questions.push({
      question: `Which country does this flag ${
        countries[countriesIndex[rightAnswerIndex]].flag
      } belong to?`,
      rightAnswer: countries[countriesIndex[rightAnswerIndex]].name.common,
      answers: countriesIndex.map((index) => countries[index].name.common),
    });
  }

  return questions;
}
