import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListStyleOutline.svg';

export function ListStyleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ListStyleOutline">
      <SVG />
    </Icon>
  );
}
