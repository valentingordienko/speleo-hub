import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListOutline.svg';

export function ListOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ListOutline">
      <SVG />
    </Icon>
  );
}
