import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListStyleOutline.svg';

export function ListStyleOutline(props: TProps) {
  return (
    <Icon {...props} name="ListStyleOutline">
      <SVG />
    </Icon>
  );
}
