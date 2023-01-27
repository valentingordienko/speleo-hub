import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VIPOutline.svg';

export function VIPOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="VIPOutline">
      <SVG />
    </Icon>
  );
}
