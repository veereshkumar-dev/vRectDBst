import * as React from 'react';

export interface BotCardSwitcherProps {
  className?: string;
  children?: React.ReactNode;
  Title: string;
  Description: string;
  Rating: number;
  Views: number;
  URL: string;
  Icon: string;
  Type: string;
  Id: string;

  Status: string;
  Function: string;
  SBG: string;

  ContactName: string;
  ContactEmail: string;
  PDDURL: string;
  BenefitsCurrentYear: number;
  BenefitsFiveYears: number;
  BenefitsStartsOn: Date;
}

export function BotCardSwitcher(props: BotCardSwitcherProps): React.ReactNode;
