import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherHorizontOutline.svg';

export function OtherHorizontOutline(props: TProps) {
  return (
    <Icon {...props} name="OtherHorizontOutline">
      <SVG />
    </Icon>
  );
}
