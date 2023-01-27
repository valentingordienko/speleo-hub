import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CloneOutline.svg';

export function CloneOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CloneOutline">
      <SVG />
    </Icon>
  );
}
