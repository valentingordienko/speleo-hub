import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListOutline.svg';

export function ListOutline(props: TProps) {
  return (
    <Icon {...props} name="ListOutline">
      <SVG />
    </Icon>
  );
}
