import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SolomonIslands.svg';

export function SolomonIslands(props: TProps) {
  return (
    <Icon {...props} name="SolomonIslands">
      <SVG />
    </Icon>
  );
}
