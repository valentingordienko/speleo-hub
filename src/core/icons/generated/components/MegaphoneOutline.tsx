import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MegaphoneOutline.svg';

export function MegaphoneOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MegaphoneOutline">
      <SVG />
    </Icon>
  );
}
