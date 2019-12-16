import * as React from 'react';

export interface DetailsCardProps {
  className?: string;
  children?: React.ReactNode;

  Description: string;
  ContactName: string;
  ContactEmail: string;
  PDDURL: string;
  BenefitsCurrentYear: number;
  BenefitsFiveYears: number;
  BenefitsStartsOn: Date;
}

export function DetailsCard(props: DetailsCardProps): React.ReactNode;
