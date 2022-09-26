import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaneOutline.svg';

export function PlaneOutline(props: TProps) {
  return (
    <Icon {...props} name="PlaneOutline">
      <SVG />
    </Icon>
  );
}
