import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallLeftOutline.svg';

export function ArrowsSmallLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallLeftOutline">
      <SVG />
    </Icon>
  );
}
