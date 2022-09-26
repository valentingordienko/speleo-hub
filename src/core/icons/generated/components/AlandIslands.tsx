import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlandIslands.svg';

export function AlandIslands(props: TProps) {
  return (
    <Icon {...props} name="AlandIslands">
      <SVG />
    </Icon>
  );
}
