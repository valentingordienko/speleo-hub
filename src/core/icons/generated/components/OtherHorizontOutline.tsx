import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherHorizontOutline.svg';

export function OtherHorizontOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="OtherHorizontOutline">
      <SVG />
    </Icon>
  );
}
