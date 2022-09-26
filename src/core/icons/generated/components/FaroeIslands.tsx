import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaroeIslands.svg';

export function FaroeIslands(props: TProps) {
  return (
    <Icon {...props} name="FaroeIslands">
      <SVG />
    </Icon>
  );
}
