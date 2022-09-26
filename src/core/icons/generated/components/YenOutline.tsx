import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/YenOutline.svg';

export function YenOutline(props: TProps) {
  return (
    <Icon {...props} name="YenOutline">
      <SVG />
    </Icon>
  );
}
