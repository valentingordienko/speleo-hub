import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaroeIslands.svg';

export function FaroeIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="FaroeIslands">
      <SVG />
    </Icon>
  );
}
