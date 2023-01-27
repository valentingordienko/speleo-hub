import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/YenOutline.svg';

export function YenOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="YenOutline">
      <SVG />
    </Icon>
  );
}
