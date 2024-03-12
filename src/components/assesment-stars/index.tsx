import { Star, StarHalf, StarBorder } from "@styled-icons/material-outlined";
import { SAssessmentStars } from "./styles";

type AssessmentStarsProps = {
  assessment: number;
};

export const AssessmentStars = ({ assessment }: AssessmentStarsProps) => {
  const stars = [];
  const roundAssetment = Math.round(assessment - 0.1);

  for (let i = 0; i < roundAssetment; i++) {
    stars.push(<Star />);
  }

  if (assessment % 1 !== 0) {
    stars.push(<StarHalf />);
    assessment++;
  }

  for (let i = 0; i < 5 - assessment; i++) {
    stars.push(<StarBorder />);
  }

  return <SAssessmentStars>{stars.map((v) => v)}</SAssessmentStars>;
};
