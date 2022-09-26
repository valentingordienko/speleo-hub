import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignCenterOutline.svg';

export function AlignCenterOutline(props: TProps) {
  return (
    <Icon {...props} name="AlignCenterOutline">
      <SVG />
    </Icon>
  );
}
