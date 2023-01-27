import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignCenterOutline.svg';

export function AlignCenterOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AlignCenterOutline">
      <SVG />
    </Icon>
  );
}
