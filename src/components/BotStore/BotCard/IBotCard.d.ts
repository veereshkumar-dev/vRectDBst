import * as React from 'react';

export interface BotCardProps {
  className?: string;
  children?: React.ReactNode;
  Title: string;
  Description: string;
  Rating: number;
  Views: number;
  URL: string;
  Icon: string;
  Type: string;
  ToggleExpand(): any;

  Status: string;

  Function: string;
  SBG: string;
}

export function BotCard(props: BotCardProps): React.ReactNode;
