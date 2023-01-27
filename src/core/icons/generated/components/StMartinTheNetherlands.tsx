import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StMartinTheNetherlands.svg';

export function StMartinTheNetherlands(props: TBaseProps) {
  return (
    <Icon {...props} name="StMartinTheNetherlands">
      <SVG />
    </Icon>
  );
}
