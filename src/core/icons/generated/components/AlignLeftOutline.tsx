import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignLeftOutline.svg';

export function AlignLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AlignLeftOutline">
      <SVG />
    </Icon>
  );
}
