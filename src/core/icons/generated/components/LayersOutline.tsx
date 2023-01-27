import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayersOutline.svg';

export function LayersOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LayersOutline">
      <SVG />
    </Icon>
  );
}
