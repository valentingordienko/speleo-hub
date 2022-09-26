import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MegaphoneOutline.svg';

export function MegaphoneOutline(props: TProps) {
  return (
    <Icon {...props} name="MegaphoneOutline">
      <SVG />
    </Icon>
  );
}
