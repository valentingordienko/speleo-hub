import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignRightOutline.svg';

export function AlignRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AlignRightOutline">
      <SVG />
    </Icon>
  );
}
