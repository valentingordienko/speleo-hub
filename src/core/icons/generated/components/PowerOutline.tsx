import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PowerOutline.svg';

export function PowerOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PowerOutline">
      <SVG />
    </Icon>
  );
}
