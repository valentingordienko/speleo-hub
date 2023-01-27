import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NorthernMarianaIslands.svg';

export function NorthernMarianaIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="NorthernMarianaIslands">
      <SVG />
    </Icon>
  );
}
