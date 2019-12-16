import * as React from 'react';

export interface BotCard_ExpandedProps {
  className?: string;
  children?: React.ReactNode;
  Title: string;
  Description: string;
  Rating: number;
  Views: number;
  URL: string;
  Icon: string;
  Type: string;

  ContactName: string;
  ContactEmail: string;
  PDDURL: string;
  BenefitsCurrentYear: number;
  BenefitsFiveYears: number;
  BenefitsStartsOn: Date;

  Status: string;

  Function: string;
  SBG: string;
}

export function BotCard_Expanded(props: BotCard_ExpandedProps): React.ReactNode;
