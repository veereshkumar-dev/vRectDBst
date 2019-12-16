import * as React from 'react';

export interface CardItemProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  imgUrl: string;
}

export function CardItem(props: CardItemProps): React.ReactNode;
