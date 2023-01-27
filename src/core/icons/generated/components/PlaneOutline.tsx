import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaneOutline.svg';

export function PlaneOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PlaneOutline">
      <SVG />
    </Icon>
  );
}
