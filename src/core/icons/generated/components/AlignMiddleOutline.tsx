import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlignMiddleOutline.svg';

export function AlignMiddleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AlignMiddleOutline">
      <SVG />
    </Icon>
  );
}
