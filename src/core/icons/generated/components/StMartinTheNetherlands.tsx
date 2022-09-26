import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StMartinTheNetherlands.svg';

export function StMartinTheNetherlands(props: TProps) {
  return (
    <Icon {...props} name="StMartinTheNetherlands">
      <SVG />
    </Icon>
  );
}
