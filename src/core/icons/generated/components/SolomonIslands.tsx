import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SolomonIslands.svg';

export function SolomonIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="SolomonIslands">
      <SVG />
    </Icon>
  );
}
