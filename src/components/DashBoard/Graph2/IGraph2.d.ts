import * as React from 'react';

export interface Graph2Props {
  className?: string;
  children?: React.ReactNode;

  viewsCount: number;
  benefits: number;
  BenefitsStartsOn: Date;
}

export function Graph2(props: Graph2Props): React.ReactNode;
