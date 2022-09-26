import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallLeftOutline.svg';

export function ArrowsSmallLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallLeftOutline">
      <SVG />
    </Icon>
  );
}
