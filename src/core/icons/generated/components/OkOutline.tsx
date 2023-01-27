import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkOutline.svg';

export function OkOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="OkOutline">
      <SVG />
    </Icon>
  );
}
