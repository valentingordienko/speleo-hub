import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignLeftOutline.svg';

export function AlignLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="AlignLeftOutline">
      <SVG />
    </Icon>
  );
}
