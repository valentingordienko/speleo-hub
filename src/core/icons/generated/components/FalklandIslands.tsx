import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FalklandIslands.svg';

export function FalklandIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="FalklandIslands">
      <SVG />
    </Icon>
  );
}
