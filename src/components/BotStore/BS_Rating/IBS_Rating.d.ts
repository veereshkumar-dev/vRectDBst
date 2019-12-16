import * as React from 'react';

export interface BS_RatingProps {
  className?: string;
  children?: React.ReactNode;
  rating: number;
}

export function BS_Rating(props: BS_RatingProps): React.ReactNode;
