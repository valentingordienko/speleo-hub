import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FalklandIslands.svg';

export function FalklandIslands(props: TProps) {
  return (
    <Icon {...props} name="FalklandIslands">
      <SVG />
    </Icon>
  );
}
