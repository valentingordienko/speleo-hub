import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NorthernMarianaIslands.svg';

export function NorthernMarianaIslands(props: TProps) {
  return (
    <Icon {...props} name="NorthernMarianaIslands">
      <SVG />
    </Icon>
  );
}
