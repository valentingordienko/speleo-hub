import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayersSolid.svg';

export function LayersSolid(props: TProps) {
  return (
    <Icon {...props} name="LayersSolid">
      <SVG />
    </Icon>
  );
}
