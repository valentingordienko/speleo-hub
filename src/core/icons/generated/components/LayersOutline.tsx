import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayersOutline.svg';

export function LayersOutline(props: TProps) {
  return (
    <Icon {...props} name="LayersOutline">
      <SVG />
    </Icon>
  );
}
