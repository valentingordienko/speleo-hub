import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CloneOutline.svg';

export function CloneOutline(props: TProps) {
  return (
    <Icon {...props} name="CloneOutline">
      <SVG />
    </Icon>
  );
}
