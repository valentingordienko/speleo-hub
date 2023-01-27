import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlandIslands.svg';

export function AlandIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="AlandIslands">
      <SVG />
    </Icon>
  );
}
