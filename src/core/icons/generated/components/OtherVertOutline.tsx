import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherVertOutline.svg';

export function OtherVertOutline(props: TProps) {
  return (
    <Icon {...props} name="OtherVertOutline">
      <SVG />
    </Icon>
  );
}
