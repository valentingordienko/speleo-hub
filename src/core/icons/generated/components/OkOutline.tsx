import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkOutline.svg';

export function OkOutline(props: TProps) {
  return (
    <Icon {...props} name="OkOutline">
      <SVG />
    </Icon>
  );
}
