import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AgreedOutline.svg';

export function AgreedOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AgreedOutline">
      <SVG />
    </Icon>
  );
}
